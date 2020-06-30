import { useContext } from 'react';

import AuthContext from './component';

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
