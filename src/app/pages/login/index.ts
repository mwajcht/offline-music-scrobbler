import { RootStore } from '@core/store';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';

import LoginComponent from './login';

import { obtainSessionKey } from './store/actions';

interface DispatchProps {}
interface MapStateProps {}

const mapStateToProps = (state: RootStore): MapStateProps => ({
  sessionKey: state.login.sessionKey, // TODO: use reselect selector
});

const mapDispatchToProps: DispatchProps = {
  obtainSessionKey,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl,
)(LoginComponent);
