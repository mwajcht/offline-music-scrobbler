import React, { PureComponent } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { obtainSessionKey } from './store/actions';

interface OwnProps {
  obtainSessionKey: typeof obtainSessionKey;
  sessionKey: string;
}

type LoginComponentProps = OwnProps & RouteComponentProps;

class LoginComponent extends PureComponent<LoginComponentProps> {
  public state = {
    loginSuccessful: false,
  };

  public componentDidMount() {
    let qs = require('qs');
    let token = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).token;
    this.props.obtainSessionKey({
      "token": token
    });
  }

  render() {
    return (
      // this.state.loginSuccessful ? <Redirect to="/" push /> :
      this.props.sessionKey ? <Redirect to="/" push /> :
      <div>
        {/*token*/}
      </div>
    );
  }
}

export default LoginComponent;
