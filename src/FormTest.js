import React, { Component } from 'react';

export class FormTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      message: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.send = this.send.bind(this);
  }

  handleInput({ target: { value } }) {
    this.setState({
      value
    });
  }

  send() {
    const { value } = this.state;
    this.setState({
      value: '',
      message: value
    });
  }

  render() {
    return (
        <div>
          <img src={'https://1.bp.blogspot.com/-ZOg0qAG4ewU/Xub_uw6q0DI/AAAAAAABZio/MshyuVBpHUgaOKJtL47LmVkCf5Vge6MQQCNcBGAsYHQ/s1600/pose_pien_uruuru_woman.png'}
            alt={'test'} />
          <input type="text" value={this.state.value} onChange={this.handleInput} />
          <button onClick={this.send}>SEND</button>
          <div>{this.state.message}</div>
        </div>
    );
  }
}
