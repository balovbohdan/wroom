import React from 'react';

import Landing from './landing';
import Content from './content';

type Props = {
  auth: any;
};

const authorized = false;

const Main: React.FC<Props> = (props: Props) => {
  return authorized ? <Content /> : <Landing login={props.auth.login} />;
};

export default Main;
