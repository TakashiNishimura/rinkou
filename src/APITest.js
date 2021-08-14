import React, {useState, useEffect} from "react";

const APITest = () => {

  const [posts, setPosts] = useState({
    publicTime: "",
    publicTimeFormatted: "",
    publishingOffice: "",
    title: "",
    link: "",
    description: {
    //   publicTime: "",
    //   publicTimeFormatted: "",
    //   headlineText: "",
    //   bodyText: "",
    //   text: ""
    },
    forecasts: [
    //   {
    //     date: "",
    //     dateLabel: "",
    //     telop: "",
    //     detail: {
    //       weather: "",
    //       wind: "",
    //       wave: ""
    //     },
    //     temperature: {
    //       min: {
    //         celsius: "",
    //         fahrenheit: ""
    //       },
    //       max: {
    //         celsius: "",
    //         fahrenheit: ""
    //       }
    //     },
    //     chanceOfRain: {
    //       T00_06: "",
    //       T06_12: "",
    //       T12_18: "",
    //       T18_24: ""
    //     },
    //     image: {
    //       title: "",
    //       url: "",
    //       width: 0,
    //       height: 0
    //     }
    //   },
    //   {
    //     date: "",
    //     dateLabel: "",
    //     telop: "",
    //     detail: {
    //       weather: "",
    //       wind: "",
    //       wave: ""
    //     },
    //     temperature: {
    //       min: {
    //         celsius: "",
    //         fahrenheit: ""
    //       },
    //       max: {
    //         celsius: "",
    //         fahrenheit: ""
    //       }
    //     },
    //     chanceOfRain: {
    //       T00_06: "",
    //       T06_12: "",
    //       T12_18: "",
    //       T18_24: ""
    //     },
    //     image: {
    //       title: "",
    //       url: "",
    //       width: 0,
    //       height: 0
    //     }
    //   },
    //   {
    //     date: "",
    //     dateLabel: "",
    //     telop: "",
    //     detail: {
    //       weather: "",
    //       wind: "",
    //       wave: ""
    //     },
    //     temperature: {
    //       min: {
    //         celsius: "",
    //         fahrenheit: ""
    //       },
    //       max: {
    //         celsius: "",
    //         fahrenheit: ""
    //       }
    //     },
    //     chanceOfRain: {
    //       T00_06: "",
    //       T06_12: "",
    //       T12_18: "",
    //       T18_24: ""
    //     },
    //     image: {
    //       title: "",
    //       url: "",
    //       width: 0,
    //       height: 0
    //     }
    //   }
    ],
    location: {
    //   area: "",
    //   prefecture: "",
    //   district: "",
    //   city: ""
    },
    copyright: {
    //   title: "",
    //   link: "",
    //   image: {
    //     title: "",
    //     link: "",
    //     url: "",
    //     width: 0,
    //     height: 0
    //   },
    //   provider: [
    //     {
    //       link: "",
    //       name: "",
    //       note: ""
    //     }
    //   ]
    }
  });

  useEffect(() => {
    // fetch("https://weather.tsukumijima.net/api/forecast/city/400040")
    fetch("https://viwy3zwne1.execute-api.us-east-1.amazonaws.com/dev", {method:"POST"})
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPosts(data);
      })
  },[]);

  return (
    <div>
      <a href={posts.link}>{posts["description"]["publicTime"]}</a>
    </div>
  );
}

export default APITest;