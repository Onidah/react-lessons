import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1> About</h1>
      <button>
        <Link to="/">Go to home</Link>
      </button>
    </div>
  );
}

export default About;
