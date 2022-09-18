import React from "react";
import "./TeachersHome.css";

function TeachersHome() {
  return (
    <div className="home">
      <button className="btn info">View all Teachers</button>
      <button className="btn info">
        Teachers having attandance less than 75%
      </button>
      <button className="btn info">Best result getting Teachers</button>
      <button className="btn info">Teachers who failed in last exam</button>
    </div>
  );
}

export default TeachersHome;
