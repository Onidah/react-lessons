import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Github explorer</h1>

      <p>Explore GitHub resporitaries and see their files</p>

      <Link to="/repos">Explore Resporitaries</Link>
    </div>
  );
}

export default Home;
