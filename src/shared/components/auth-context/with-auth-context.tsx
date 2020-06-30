import React from 'react';

import useAuthContext from './use-auth-context';

const withAuthContext = (WrappedComponent: any) => (props: {}) => (
  <WrappedComponent {...props} authContext={useAuthContext()} />
);

export default withAuthContext;
