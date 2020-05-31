import React, { PureComponent, ButtonHTMLAttributes } from 'react';
import { Button as ButtonWrapper } from './button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  clickHandler(): void;
}

export class Button extends PureComponent<ButtonProps> {
  private buttonClickHandler = () => {
    const { clickHandler } = this.props;
    clickHandler();
  };

  public render() {
    const { text } = this.props;

    return (
      <ButtonWrapper type="button" onClick={this.buttonClickHandler}>
        {text}
      </ButtonWrapper>
    );
  }
}
