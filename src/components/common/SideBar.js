import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    // <Router>
    <div>
      {/* // <!-- Load an icon library --> */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      {/* <!-- The sidebar --> */}
      <div className="sidebar">
        <Link to="/home">
          <i className="fa fa-fw fa-institution"></i> Home
        </Link>
        <Link to="/students">
          <i className="fa fa-fw  fa-graduation-cap"></i> Students
        </Link>
        <Link to="/classes">
          <i className="fa fa-fw fa-group"></i> Classes
        </Link>
        <Link to="/teachers">
          <i className="fa fa-fw fa-user-circle-o"></i> Teachers
        </Link>
      </div>
    </div>
    // </Router>
  );
}

export default SideBar;
