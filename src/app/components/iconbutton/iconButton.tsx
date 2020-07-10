import React, { PureComponent, ButtonHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IconButton as IconButtonWrapper } from './iconButton.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: IconDefinition;
  clickHandler(): void;
}

export class IconButton extends PureComponent<ButtonProps> {
  private buttonClickHandler = () => {
    const { clickHandler } = this.props;
    clickHandler();
  };

  public render() {
    const { text, icon } = this.props;

    return (
      <IconButtonWrapper type="button" onClick={this.buttonClickHandler}>
        <FontAwesomeIcon icon={icon} /> {text}
      </IconButtonWrapper>
    );
  }
}
