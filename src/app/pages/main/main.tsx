import React, { PureComponent } from 'react';
import { InjectedIntlProps } from 'react-intl';
import { Input, Button, Select } from '@core/components';
import { loadArtists, loadAlbums, loadTracks } from './store/actions';
import { v1 } from 'uuid';

import { Title } from './components/title/title';
import {Album, Artist, Track} from "@core/pages/main/namespace";

interface OwnProps {
  loadArtists: typeof loadArtists;
  loadAlbums: typeof loadAlbums;
  loadTracks: typeof loadTracks;
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
}

type MainComponentProps = OwnProps & InjectedIntlProps;

class MainComponent extends PureComponent<MainComponentProps> {
  public state = {
    inputText: '',
    selectedArtist: '',
    selectedAlbum: '',
  };

  public componentDidMount() {

  }

  private onInputChange = (value: string) => {
    this.setState({
      inputText: value,
    });
  };

  private onArtistChange = (value: string) => {
    this.props.loadAlbums({
      name: value,
    });
    this.setState({
      selectedArtist: value,
    });
  };

  private onAlbumChange = (value: string) => {
    // TODO clean tracks
    this.props.loadTracks({
      artist: this.state.selectedArtist,
      album: value
    });
    this.setState({
      selectedAlbum: value,
    });
  };

  private searchArtists = () => {
    // TODO clean artists and albums and tracks

    this.props.loadArtists({
      name: this.state.inputText,
    });
  };

  render() {
    const { artists, albums, tracks, intl } = this.props;

    return (
      <div>
        <Title text={intl.formatMessage({ id: 'page.main.hello' })} />
        <Input onChange={this.onInputChange} />
        <Button
          type="button"
          text="Search artist"
          clickHandler={this.searchArtists}
        />
        <Select onChange={this.onArtistChange} options={artists.map((artist: any) => artist.name)} />
        <Select onChange={this.onAlbumChange} options={albums.map((album: any) => album.name)} />
        <ul>
          {tracks.map((track: Track) => {
            return <li key={v1()}>{track.name} - {track.duration}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default MainComponent;
