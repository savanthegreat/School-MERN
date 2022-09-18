import React from "react";
import "./StudentHome.css";

function StudentHome() {
  return (
    <div className="home">
      <button className="btn info">View all Students</button>
      <button className="btn info">
        Students having attandance less than 75%
      </button>
      <button className="btn info">Student remaining to pay fees</button>
      <button className="btn info">Topper students</button>
      <button className="btn info">Students who failed in last exam</button>
    </div>
  );
}

export default StudentHome;
