import { RootStore } from '@core/store';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';

import MainComponent from './main';

import { loadArtists } from './store/actions';

interface DispatchProps {}
interface MapStateProps {}

const mapStateToProps = (state: RootStore): MapStateProps => ({
  artists: state.main.artists, // TODO: use reselect selector
});

const mapDispatchToProps: DispatchProps = {
  loadArtists: loadArtists,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  injectIntl,
)(MainComponent);
