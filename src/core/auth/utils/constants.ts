import environment from 'environment';

export const AUTH0_DATABASE_NAME = 'Username-Password-Authentication';

export const AUTH0_ENDPOINTS = {
  SIGN_UP: `https://${environment.AUTH0_DOMAIN}/dbconnections/signup`,
};
