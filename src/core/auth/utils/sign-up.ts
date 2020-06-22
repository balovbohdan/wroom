import environment from 'environment';

import * as constants from './constants';

const signUp = async (email: string, password: string): Promise<any> => {
  const resonse = await fetch(constants.AUTH0_ENDPOINTS.SIGN_UP, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      // eslint-disable-next-line @typescript-eslint/camelcase
      client_id: environment.AUTH0_CLIENT_ID,
      connection: constants.AUTH0_DATABASE_NAME,
      email,
      password,
    }),
  });

  return resonse.json();
};

export default signUp;
