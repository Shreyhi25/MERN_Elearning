import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="header">
      <div className="logo">
        <span className="text">
          <i>EASY</i>
          <b>LEARN</b>
        </span>
      </div>
      <div className="nav">
        <ul>
          <li className="active">
          <Link to="/"><a href="">Home</a></Link>
          </li>
          <li>
           <Link to="/courses">Courses</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
        </ul>
        
      </div>
      <div className="user">
   <Link to="/login"><button className="login">Login</button></Link>
   <Link to="/register" ><button className="register">Register</button></Link>
        </div>
    </div>
  );
}
