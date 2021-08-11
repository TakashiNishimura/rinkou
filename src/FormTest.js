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
    var callAPI = (firstName,lastName)=>{
      // instantiate a headers object
      var myHeaders = new Headers();
      // add content type header to object
      myHeaders.append("Content-Type", "application/json");
      // using built in JSON utility package turn object to string and store in a variable
      var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
      // create a JSON object with parameters for API call and store in a variable
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      // make API call with parameters and use promises to get response
      fetch("https://viwy3zwne1.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
    }
    callAPI("","")
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
