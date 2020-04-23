import React, { PureComponent } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { obtainSessionKey } from './store/actions';

interface OwnProps {
  obtainSessionKey: typeof obtainSessionKey;
  sessionKey: string;
}

type LoginComponentProps = OwnProps & RouteComponentProps;

class LoginComponent extends PureComponent<LoginComponentProps> {
  public componentDidMount() {
    const qs = require('qs');
    const { token } = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    this.props.obtainSessionKey({
      token,
    });
  }

  render() {
    return this.props.sessionKey ? <Redirect to="/" push /> : <div />;
  }
}

export default LoginComponent;
