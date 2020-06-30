/* eslint @typescript-eslint/camelcase: 0 */

import Auth0Lock from 'auth0-lock';
import { Auth0Error } from 'auth0-js';

import environment from 'environment';

import * as T from './types';
import * as constants from './constants';
import validateUser from './validate-user';
import validateAuthResult from './validate-auth-result';

export class Auth {
  private readonly history: any;
  private scopes = '';
  private idToken = '';
  private accessToken = '';
  private expiresAt = 0;
  private user: T.User | undefined = undefined;
  private auth0Lock: typeof Auth0Lock = new Auth0Lock(environment.AUTH0_CLIENT_ID, environment.AUTH0_DOMAIN, {
    auth: {
      autoParseHash: true,
      audience: environment.AUTH0_AUDIENCE,
      responseType: constants.AUTH0_RESPONSE_TYPE,
      params: {
        scope: constants.AUTH0_REQUESTED_SCOPES,
      },
    },
  });

  constructor(history: any) {
    this.history = history;

    this.auth0Lock.on('authenticated', this.handleAuthenticated);
  }

  get authenticated(): boolean {
    return Date.now() < this.expiresAt;
  }

  renewToken = async (): Promise<void | never> => (
    new Promise((resolve, reject) => {
      this.auth0Lock.checkSession({}, (auth0Error: Auth0Error | null, authResult: T.AuthResult | undefined) => {
        if (auth0Error) {
          reject(auth0Error);
        } else if (authResult) {
          try {
            validateAuthResult(authResult);
            this.setSession(authResult);
            this.scheduleTokenRenewal();
            this.getUser();
            resolve();
          } catch (error) {
            reject(error);
          }
        } else {
          reject(new Error('Failed to renew token. Got invalid response.'));
        }
      });
    })
  );

  login = async (email: string, password: string): Promise<void> => {
    this.auth0Lock.show();
  };

  logout = () => {
    this.clearSession();
    this.history.push('/');
  };

  checkUserHasScopes = (requiredScopes: string[]): boolean => {
    const grantedScopes = this.scopes ? this.scopes.split(' ') : [];

    return requiredScopes.every((scope) => grantedScopes.includes(scope));
  };

  private handleAuthenticated = async (authResult: T.AuthResult) => {
    this.setSession(authResult);
    this.scheduleTokenRenewal();
  };

  private async getUser(): Promise<T.User> {
    if (this.user) {
      return this.user;
    } else {
      this.user = await this.loadUser();

      return this.user;
    }
  }

  private loadUser(): Promise<T.User> {
    return new Promise((resolve, reject) => {
      const accessToken = this.getAccessToken();

      this.auth0Lock.getUserInfo(accessToken, (auth0Error: Auth0Error, user: any | undefined) => {
        if (auth0Error) {
          reject(auth0Error);
        } else if (user) {
          try {
            validateUser(user);
            resolve({
              email: user.email,
              emailVerified: user.email_verified,
              avatar: user.picture,
            });
          } catch (error) {
            reject(error);
          }
        } else {
          reject(new Error('Failed to fetch auth0 user profile.'));
        }
      });
    });
  }

  private getAccessToken(): string | never {
    if (this.accessToken) {
      return this.accessToken;
    } else {
      throw new Error('Failed to find access token.');
    }
  }

  private setSession(authResult: T.AuthResult) {
    this.accessToken = authResult.accessToken;
    this.expiresAt = authResult.expiresIn + Date.now();
    this.scopes = authResult.scope || constants.AUTH0_REQUESTED_SCOPES;
  }

  private clearSession() {
    this.idToken = '';
    this.expiresAt = 0;
    this.accessToken = '';
    this.scopes = '';
  }

  private scheduleTokenRenewal() {
    const delay = this.expiresAt - Date.now();

    if (delay > 0) {
      setTimeout(this.renewToken, delay);
    }
  }
}
