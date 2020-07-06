import React, { PureComponent, ButtonHTMLAttributes } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchButton as ButtonWrapper } from './searchbutton.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  clickHandler(): void;
}

export class Searchbutton extends PureComponent<ButtonProps> {
  private buttonClickHandler = () => {
    const { clickHandler } = this.props;
    clickHandler();
  };

  public render() {
    const { text } = this.props;

    return (
      <ButtonWrapper type="button" onClick={this.buttonClickHandler}>
        <FontAwesomeIcon icon={faSearch} /> {text}
      </ButtonWrapper>
    );
  }
}
