import { WebAuth } from 'auth0-js';

import environment from 'environment';

import * as utils from './utils';

const RESPONSE_TYPE = 'token id_token';
const REDIRECT_ON_LOGIN = 'redirect_on_login';
const REQUESTED_SCOPES = 'openid profile email read:courses';

export class Auth {
  private readonly auth0: any;
  private readonly history: any;
  private userProfile: any;
  private scopes: any;
  private idToken: any;
  private expiresAt: any;
  private accessToken: any;

  constructor(history: any) {
    this.history = history;
    this.auth0 = new WebAuth({
      domain: environment.AUTH0_DOMAIN,
      audience: environment.AUTH0_AUDIENCE,
      clientID: environment.AUTH0_CLIENT_ID,
      redirectUri: environment.AUTH0_CALLBACK_URL,
      scope: REQUESTED_SCOPES,
      responseType: RESPONSE_TYPE,
    });
  }

  get isAuthenticated(): boolean {
    return Date.now() < this.expiresAt;
  }

  async loadUserProfile(): Promise<any> {
    if (this.userProfile) {
      return this.userProfile;
    } else {
      this.userProfile = await this.getUserProfileFromAuth0();

      return this.userProfile;
    }
  }

  signUp = async (email: string, password: string) => {
    const response = await utils.signUp(email, password);

    console.log('-------------------------------------------', response);
  };

  login = () => {
    window.localStorage.setItem(REDIRECT_ON_LOGIN, JSON.stringify(this.history.location));
    this.auth0.authorize();
  };

  logout = () => {
    this.auth0.logout({
      returnTo: '/',
      clientID: environment.AUTH0_CLIENT_ID,
    });
  };

  checkUserHasScopes = (requiredScopes: string[]): boolean => {
    const grantedScopes = this.scopes ? this.scopes.split(' ') : [];

    return requiredScopes.every((scope) => grantedScopes.includes(scope));
  };

  renewToken = async (): Promise<void> => (
    new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (error: any, result: any) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          this.setSession(result);
          resolve(result);
        }
      });
    })
  );

  handleAuthentication = () => {
    this.auth0.parseHash((error: any, authResult: any) => {
      const isAuthResultValid = authResult && authResult.accessToken && authResult.idToken;

      if (isAuthResultValid) {
        const redirectOnLogin = localStorage.getItem(REDIRECT_ON_LOGIN);
        const redirectLocation = redirectOnLogin ? JSON.parse(redirectOnLogin) : '/';

        this.setSession(authResult);
        this.history.push(redirectLocation);
      } else if (error) {
        this.history.push('/');
        alert(`Error: ${error}. Check the console for further details.`);
        console.error(error);
      }

      localStorage.removeItem(REDIRECT_ON_LOGIN);
    });
  };

  private getUserProfileFromAuth0(): Promise<any> {
    return new Promise((resolve, reject) => {
      const accessToken = this.getAccessToken();

      this.auth0.client.userInfo(accessToken, (error: any, userProfile: any) => {
        if (error) {
          console.error(error);
          reject(error);
        } else if (userProfile) {
          resolve(userProfile);
        } else {
          reject(new Error('Failed to fetch user profile from Auth0.'));
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

  private setSession(authResult: any) {
    this.idToken = authResult.isToken;
    this.accessToken = authResult.accessToken;
    this.scopes = authResult.scopes || REQUESTED_SCOPES;
    this.expiresAt = (authResult.expiresIn * 1000) + Date.now();

    this.scheduleTokenRenewal();
  }

  private scheduleTokenRenewal() {
    const delay = this.expiresAt - Date.now();

    if (delay > 0) {
      setTimeout(this.renewToken, delay);
    }
  }
}
