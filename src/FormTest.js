import React, { Component } from 'react';
import APITest from './APITest';

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
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // const requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: JSON.stringify({"firstName":"","lastName":""}),
    //   redirect: 'follow'
    // }
    //
    // fetch("https://viwy3zwne1.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
    //   .then(response => response.json())
    //   .then(result => {
    //     this.setState({jsonObj: JSON.parse(result).body});
    //   })
    //   .catch(e => console.log("error", e));

    return (
        <div>
          <APITest />
          <input type="text" value={this.state.value} onChange={this.handleInput} />
          <button onClick={this.send}>SEND</button>
          <div>{this.state.message}</div>
        </div>
    );
  }
}
