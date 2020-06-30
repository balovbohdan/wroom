import React from 'react';

import { withAuthContext } from 'shared/components/auth-context';

import Landing from './landing';
import Content from './content';

type Props = {
  authContext: any;
};

const Main: React.FC<Props> = (props: Props) => (
  props.authContext.authenticated ? <Content /> : <Landing login={props.authContext.login} />
);

export default withAuthContext(Main);
