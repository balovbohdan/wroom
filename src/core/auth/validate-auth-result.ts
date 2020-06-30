import Joi from '@hapi/joi';

import * as T from './types';

const schema = Joi.object({
  expiresIn: Joi.number().integer().required(),
  accessToken: Joi.string().required(),
  scope: Joi.string().optional(),
}).required().unknown(true);

const validateAuthResult = (authResult?: T.AuthResult): void | never => {
  const { error } = schema.validate(authResult);

  if (error) {
    throw new Error('Got invalid auth result.');
  }
};

export default validateAuthResult;
