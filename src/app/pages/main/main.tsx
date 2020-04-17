import React, { PureComponent } from 'react';
import { InjectedIntlProps } from 'react-intl';
import { Redirect } from 'react-router';
import { Input, Button, Select } from '@core/components';
import { loadArtists, loadAlbums, loadTracks, clearArtists, clearAlbums, clearTracks } from './store/actions';
import { v1 } from 'uuid';

import { Title } from './components/title/title';
import {Album, Artist, Track} from "@core/pages/main/namespace";
import {getReadableLength} from "@core/namespace/utils/utils";

interface OwnProps {
  loadArtists: typeof loadArtists;
  loadAlbums: typeof loadAlbums;
  loadTracks: typeof loadTracks;
  clearArtists: typeof clearArtists;
  clearAlbums: typeof clearAlbums;
  clearTracks: typeof clearTracks;
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
  sessionKey: string;
}

type MainComponentProps = OwnProps & InjectedIntlProps;

class MainComponent extends PureComponent<MainComponentProps> {
  public state = {
    inputText: '',
    selectedArtist: '',
    selectedAlbum: '',
    shouldLogin: false,
  };

  public componentDidMount() {

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
      album: value
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

  }

  private scrobble = () => {
    if (!this.props.sessionKey) {
      this.setState({
        shouldLogin: true,
      });
    }
  };

  render() {
    const { artists, albums, tracks, intl } = this.props;

    return (
      this.state.shouldLogin ? <Redirect to="/externalLogin" push /> :
      <div>
        <Title text={intl.formatMessage({ id: 'page.main.title' })} />
        <Input onChange={this.onInputChange} />
        <Button
          type="button"
          text={intl.formatMessage({ id: 'page.main.artist.search' })}
          clickHandler={this.searchArtists}
        />
        <Select onChange={this.onArtistChange} options={artists.map((artist: any) => artist.name)} />
        <Select onChange={this.onAlbumChange} options={albums.map((album: any) => album.name)} />
        <ul>
          {tracks.map((track: Track) => {
            return <li key={v1()}>{track.name} - {getReadableLength(track.duration)}</li>;
          })}
        </ul>
        <Button
          type="button"
          text={intl.formatMessage({ id: 'page.main.list.add'})}
          clickHandler={this.addToList}
        />
        <Button
          type="button"
          text={intl.formatMessage({ id: 'page.main.scrobble'})}
          clickHandler={this.scrobble}
        />
      </div>
    );
  }
}

export default MainComponent;
