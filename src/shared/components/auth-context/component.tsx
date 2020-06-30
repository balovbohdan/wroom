import { createContext } from 'react';

import * as constants from './constants';

const AuthContext = createContext(constants.DEFAULT_AUTH_CONTEXT);

export default AuthContext;
