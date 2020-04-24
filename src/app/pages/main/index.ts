import { RootStore } from '@core/store';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';

import MainComponent from './main';

import {
  loadArtists,
  loadAlbums,
  loadTracks,
  clearArtists,
  clearAlbums,
  clearTracks,
  scrobble,
} from './store/actions';

interface DispatchProps {}
interface MapStateProps {}

const mapStateToProps = (state: RootStore): MapStateProps => ({
  artists: state.main.artists, // TODO: use reselect selector
  albums: state.main.albums,
  tracks: state.main.tracks,
  sessionKey: state.login.sessionKey,
});

const mapDispatchToProps: DispatchProps = {
  loadArtists,
  loadAlbums,
  loadTracks,
  clearArtists,
  clearAlbums,
  clearTracks,
  scrobble,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl,
)(MainComponent);
