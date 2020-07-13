import React, { PureComponent } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@core/components';
import { IconButton } from '@core/components/iconbutton/iconButton';
import { ArtistSearch as ArtistSearchWrapper } from './artistSearch.styles';

interface ArtistSearchProps {
  placeholder: string;
  clickHandler(): void;
  onChange: (text: string) => void;
}

export class ArtistSearch extends PureComponent<ArtistSearchProps> {
  public render() {
    const { placeholder, clickHandler, onChange } = this.props;

    return (
      <ArtistSearchWrapper>
        <Input onChange={onChange} placeholder={placeholder} />
        <IconButton
          type="button"
          text=""
          icon={faSearch}
          clickHandler={clickHandler}
        />
      </ArtistSearchWrapper>
    );
  }
}
