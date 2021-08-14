import React, { Component } from 'react';
import APITest from './APITest';

export class FormTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      publicTime: "",
      publicTimeFormatted: "",
      publishingOffice: "",
      title: "",
      link: "",
      description: {
        publicTime: "",
        publicTimeFormatted: "",
        headlineText: "",
        bodyText: "",
        text: ""
      },
      forecasts: [
        {
          date: "",
      dateLabel: "",
      telop: "",
      detail: {
        weather: "",
        wind: "",
        wave: ""
      },
      temperature: {
        min: {
          celsius: "",
          fahrenheit: ""
        },
        max: {
          celsius: "",
          fahrenheit: ""
        }
      },
      chanceOfRain: {
        T00_06: "",
        T06_12: "",
        T12_18: "",
        T18_24: ""
      },
      image: {
        title: "",
        url: "",
        width: 0,
        height: 0
      }
    },
      {
        date: "",
        dateLabel: "",
        telop: "",
        detail: {
          weather: "",
          wind: "",
          wave: ""
        },
        temperature: {
          min: {
            celsius: "",
            fahrenheit: ""
          },
          max: {
            celsius: "",
            fahrenheit: ""
          }
        },
        chanceOfRain: {
          T00_06: "",
          T06_12: "",
          T12_18: "",
          T18_24: ""
        },
        image: {
          title: "",
          url: "",
          width: 0,
          height: 0
        }
      },
      {
        date: "",
        dateLabel: "",
        telop: "",
        detail: {
          weather: "",
          wind: "",
          wave: ""
        },
        temperature: {
          min: {
            celsius: "",
            fahrenheit: ""
          },
          max: {
            celsius: "",
            fahrenheit: ""
          }
        },
        chanceOfRain: {
          T00_06: "",
          T06_12: "",
          T12_18: "",
          T18_24: ""
        },
        image: {
          title: "",
          url: "",
          width: 0,
          height: 0
        }
      }
  ],
    location: {
      area: "",
        prefecture: "",
        district: "",
        city: ""
    },
    copyright: {
      title: "",
        link: "",
        image: {
        title: "",
          link: "",
          url: "",
          width: 0,
          height: 0
      },
      provider: [
        {
          link: "",
          name: "",
          note: ""
        }
      ]
    },
    Item: {
      clothes: "",
        ID: "",
        url: ""
    }
    };
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
    //   .then((response) => response.json())
    //   .then((result) => {
    //     this.setState({title: result.title});
    //   })
    //   .catch(e => console.log("error", e));

    var data = null;

    var httpObj = new XMLHttpRequest();
    httpObj.open("POST", "https://viwy3zwne1.execute-api.us-east-1.amazonaws.com/dev", true);

    httpObj.onload = function () {
      data = JSON.parse(this.responseText);
    }

    httpObj.send();

    return (
        <div>
          {/*<APITest />*/}
          <div>{JSON.stringify(data)}</div>
        </div>
    );
  }
}
