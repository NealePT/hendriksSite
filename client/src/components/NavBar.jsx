import React from "react";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <div className="NavBar">
      <div className="navTitle">
        <h2>Hendriks Site</h2>
      </div>
      <ul className="navLinks">
        <li><a href="#summary">Summary</a></li>
        <li><a href="#photos">Photos</a></li>
        <li><a href="#ammenities">Amenities</a></li>
        <li><a href="#location">Location</a></li>
      </ul>
    </div>
  )
};