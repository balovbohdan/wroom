import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

import { Auth } from 'core/Auth';

import App from './component';

class AppContainer extends Component<RouteComponentProps> {
  private readonly auth = new Auth(this.props.history);

  state = {
    tokenRenewalCompleted: false,
  };

  componentDidMount() {
    this.renewAuthToken();
  }

  private async renewAuthToken() {
    try {
      // await this.auth.renewToken();
    } finally {
      this.setState(() => ({ tokenRenewalCompleted: true }));
    }
  }

  render() {
    return (
      <App
        auth={this.auth}
        tokenRenewalCompleted={this.state.tokenRenewalCompleted} />
    );
  }
}

export default AppContainer;
