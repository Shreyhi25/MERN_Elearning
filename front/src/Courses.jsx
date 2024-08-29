import React from 'react'
import Header from './Header'
import "./courses.css"
import { Link } from "react-router-dom";
export default function Courses() {
  return (
    <div>
        <div>{<Header/>}</div>
        <div className="intro">
          <div className="intro-text">
            <h1>Learn to code</h1>
            <h3>In simple way with Easy Learn</h3>
            <p>Not Sure Where To Begin</p>
          </div>
        </div>
        <div className="course1">
          <div className="course1-detail">
            <h1>HTML</h1>
            <p>The language for building web pages</p>
           <Link to="/register"> <button>Learn HTML</button></Link>
          </div>
        </div>
        <div className="course2">
          <div className="course2-detail">
          <h1>CSS</h1>
            <p>The language for styling web pages</p>
            <Link to="/register"> <button>Learn CSS</button></Link>
          </div>
        </div>
        <div className="course3">
          <div className="course3-detail">
          <h1>JavaScript</h1>
            <p>The language for building web pages</p>
            <Link to="/register"> <button>Learn JavaScript</button></Link>
          </div>
        </div>
    </div>
  )
}
