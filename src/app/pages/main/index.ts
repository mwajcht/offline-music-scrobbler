import { RootStore } from '@core/store';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';

import MainComponent from './main';

import { loadArtists, loadAlbums, loadTracks } from './store/actions';

interface DispatchProps {}
interface MapStateProps {}

const mapStateToProps = (state: RootStore): MapStateProps => ({
  artists: state.main.artists, // TODO: use reselect selector
  albums: state.main.albums, // TODO: use reselect selector
  tracks: state.main.tracks, // TODO: use reselect selector
});

const mapDispatchToProps: DispatchProps = {
  loadArtists: loadArtists,
  loadAlbums: loadAlbums,
  loadTracks: loadTracks,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  injectIntl,
)(MainComponent);
