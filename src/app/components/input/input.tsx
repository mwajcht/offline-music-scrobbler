import React, { PureComponent } from 'react';
import { Input as InputWrapper } from './input.styles';

interface InputProps {
  onChange: (text: string) => void;
  placeholder: string;
}

export class Input extends PureComponent<InputProps> {
  private onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(ev.target.value);
  };

  public render() {
    const { placeholder } = this.props;
    return <InputWrapper onChange={this.onChange} placeholder={placeholder} />;
  }
}
