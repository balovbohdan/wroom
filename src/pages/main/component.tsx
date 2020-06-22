import React from 'react';

import Landing from './landing';
import Content from './content';

type Props = {
  auth: any;
};

const authorized = false;

const Main: React.FC<Props> = (props: Props) => (
  authorized ? <Content /> : (
    <Landing login={props.auth.login} signUp={props.auth.signUp} />
  )
);

export default Main;
