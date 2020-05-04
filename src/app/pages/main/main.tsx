import React, { PureComponent } from 'react';
import { InjectedIntlProps } from 'react-intl';
import { Redirect } from 'react-router';
import { Button, Input, Select } from '@core/components';
import { v1 } from 'uuid';
import localStorageService from '@core/services/local-storage';
import {
  Album,
  Artist,
  MainComponentState,
  PlayedTrack,
  Track,
} from '@core/pages/main/namespace';
import { getReadableLength } from '@core/namespace/utils/utils';
import { initial } from '@core/pages/main/store/initial';
import { Container, Row, Col } from 'reactstrap';
import { Title } from './components/title/title';
import {
  clearAlbums,
  clearArtists,
  clearTracks,
  loadAlbums,
  loadArtists,
  loadTracks,
  scrobble,
} from './store/actions';

interface OwnProps {
  loadArtists: typeof loadArtists;
  loadAlbums: typeof loadAlbums;
  loadTracks: typeof loadTracks;
  clearArtists: typeof clearArtists;
  clearAlbums: typeof clearAlbums;
  clearTracks: typeof clearTracks;
  scrobble: typeof scrobble;
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
  sessionKey: string;
}

type MainComponentProps = OwnProps & InjectedIntlProps;

class MainComponent extends PureComponent<
  MainComponentProps,
  MainComponentState
> {
  private static storePlayedTracksInStorage(playedTracks: PlayedTrack[]) {
    localStorageService.set('playedTracks', JSON.stringify(playedTracks));
  }

  public state = initial;

  public componentDidMount() {
    this.setState({
      playedTracks: MainComponent.getPlayedTracksFromStorage(),
    });
  }

  private static getPlayedTracksFromStorage(): PlayedTrack[] {
    if (localStorageService.get('playedTracks')) {
      const deserializedTracks = JSON.parse(
        localStorageService.get('playedTracks') as string,
      );
      return Object.assign(new Array<PlayedTrack>(), deserializedTracks);
    }
    return new Array<PlayedTrack>();
  }

  private onInputChange = (value: string) => {
    this.setState({
      inputText: value,
    });
  };

  private onArtistChange = (value: string) => {
    this.props.clearAlbums();
    this.setState({
      selectedAlbum: '',
    });
    this.props.loadAlbums({
      name: value,
    });
    this.setState({
      selectedArtist: value,
    });
  };

  private onAlbumChange = (value: string) => {
    this.props.clearTracks();
    this.props.loadTracks({
      artist: this.state.selectedArtist,
      album: value,
    });
    this.setState({
      selectedAlbum: value,
    });
  };

  private searchArtists = () => {
    this.props.clearArtists();
    this.setState({
      selectedArtist: '',
      selectedAlbum: '',
    });
    this.props.loadArtists({
      name: this.state.inputText,
    });
  };

  private addToList = () => {
    if (this.props.tracks.length > 0) {
      this.setState(prevState => {
        const newPlayedTracks = [...prevState.playedTracks];
        this.props.tracks.forEach(track => {
          newPlayedTracks.push(
            new PlayedTrack(
              prevState.selectedArtist,
              prevState.selectedAlbum,
              track.name,
              track.duration,
            ),
          );
        });
        MainComponent.storePlayedTracksInStorage(newPlayedTracks);
        return {
          playedTracks: newPlayedTracks,
        };
      });
    }
  };

  private scrobble = () => {
    const sessionKey = this.props.sessionKey
      ? this.props.sessionKey
      : localStorageService.get('sessionKey');
    if (!sessionKey) {
      this.setState({
        shouldLogin: true,
      });
    } else {
      this.props.scrobble({
        tracks: this.state.playedTracks,
        sessionKey,
      });
    }
  };

  private deleteFromList(trackToRemove: PlayedTrack) {
    this.setState(prevState => {
      const newPlayedTracks = [...prevState.playedTracks];
      const index = newPlayedTracks.findIndex(
        currentTrack => currentTrack === trackToRemove,
      );

      if (index === -1)
        return {
          playedTracks: prevState.playedTracks,
        };
      newPlayedTracks.splice(index, 1);

      MainComponent.storePlayedTracksInStorage(newPlayedTracks);
      return {
        playedTracks: newPlayedTracks,
      };
    });
  }

  render() {
    const { artists, albums, tracks, intl } = this.props;
    const { playedTracks } = this.state;

    return this.state.shouldLogin ? (
      <Redirect to="/externalLogin" push />
    ) : (
      <div>
        <Title text={intl.formatMessage({ id: 'page.main.title' })} />
        <Container>
          <Row>
            <Col>
              <Input onChange={this.onInputChange} />
              <Button
                type="button"
                text={intl.formatMessage({ id: 'page.main.artist.search' })}
                clickHandler={this.searchArtists}
              />
            </Col>
            <Col>
              <Select
                onChange={this.onArtistChange}
                options={artists.map((artist: any) => artist.name)}
              />
            </Col>
            <Col>
              <Select
                onChange={this.onAlbumChange}
                options={albums.map((album: any) => album.name)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>
                {tracks.map((track: Track) => {
                  return (
                    <li key={v1()}>
                      {track.name} - {getReadableLength(track.duration)}
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                type="button"
                text={intl.formatMessage({ id: 'page.main.list.add' })}
                clickHandler={this.addToList}
                disabled={tracks.length === 0}
              />
              <Button
                type="button"
                text={intl.formatMessage({ id: 'page.main.scrobble' })}
                clickHandler={this.scrobble}
                disabled={playedTracks.length === 0}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                {intl.formatMessage({ id: 'page.main.tracks.to.scrobble' })}
              </p>
              <ul>
                {playedTracks.map((track: PlayedTrack) => {
                  return (
                    <li key={v1()}>
                      {track.artist} - {track.album} - {track.track}
                      <Button
                        text="x"
                        clickHandler={() => this.deleteFromList(track)}
                      />
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainComponent;
