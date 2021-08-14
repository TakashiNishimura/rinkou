import React, {useState, useEffect} from "react";

const APITest = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://weather.tsukumijima.net/api/forecast/city/400040")
      .then(response => response.json())
      .then(data => setPosts(data))
  },[]);

  return (
    <div>
      <ul>
        {
          posts.map(post => <li key={post.title}>{post.title}</li>)
        }
      </ul>
    </div>
  );
}

export default APITest