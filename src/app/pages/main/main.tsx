import React, { PureComponent } from 'react';
import { InjectedIntlProps } from 'react-intl';
import { Input, Button, Select } from '@core/components';
import { loadArtists, loadAlbums } from './store/actions';

import { Title } from './components/title/title';

interface OwnProps {
  loadArtists: typeof loadArtists;
  loadAlbums: typeof loadAlbums;
  artists: any;
  albums: any;
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
    this.setState({
      selectedAlbum: value,
    });
  };

  private searchArtists = () => {
    // TODO clean artists and albums
    this.props.loadArtists({
      name: this.state.inputText,
    });
  };

  render() {
    const { artists, albums, intl } = this.props;

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

      </div>
    );
  }
}

export default MainComponent;
