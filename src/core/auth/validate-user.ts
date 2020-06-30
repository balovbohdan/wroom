/* eslint @typescript-eslint/camelcase: 0 */

import Joi from '@hapi/joi';
import { Auth0UserProfile } from 'auth0-js';

const schema = Joi.object({
  email: Joi.string().required(),
  email_verified: Joi.boolean().required(),
  picture: Joi.string().required(),
}).required().unknown(true);

const validateUser = (user: Auth0UserProfile): void | never => {
  const { error } = schema.validate(user);

  if (error) {
    throw new Error('Got invalid auth0 user.');
  }
};

export default validateUser;
