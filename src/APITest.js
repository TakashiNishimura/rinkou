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
      <span>{posts}</span>
    </div>
  );
}

export default APITest