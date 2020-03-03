import React, { PureComponent } from 'react';
import { v1 } from 'uuid';

interface SelectProps {
  onChange: (text: string) => void;
  options: string[];
}

interface State {
  selectedValue: string;
}

export class Select extends PureComponent<SelectProps, State> {

  constructor(props: SelectProps) {
    super(props);

    this.state = {
      selectedValue: ''
    };
  }

  private onChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.onChange(ev.target.value);
    this.setState({
      selectedValue: ev.target.value
    });
  };

  public render() {
    const { selectedValue } = this.state;
    return <select onChange={this.onChange} defaultValue="">
      <option value="">Please Choose...</option>
      {this.props.options.map((option: any) => {
        return <option selected={option === selectedValue} key={v1()} value={option}>{option}</option>;
      })}
    </select>;
  }
}
