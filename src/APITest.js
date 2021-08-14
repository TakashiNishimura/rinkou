import React, {useState, useEffect} from "react";

const APITest = () => {

  const [posts, setPosts] = useState({ hits:[] });

  useEffect(() => {
    fetch("https://weather.tsukumijima.net/api/forecast/city/400040")
      .then(response => response.json())
      .then(data => setPosts(data))
  },[]);

  console.log(posts)

  return (
    <div>
      <ul>
      {
        posts.hits.map(item => (
          <li key={item.objectId}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export default APITest;