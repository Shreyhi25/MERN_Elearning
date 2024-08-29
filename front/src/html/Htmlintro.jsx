import React from "react";
import Htmlsidenav from "./Htmlsidenav";
import "./htmlintro.css";
import Dashboard from "../Dashboard";
import { Link } from "react-router-dom";

export default function Htmlintro() {
  return (
    <div className="side">
      
      {<Htmlsidenav />}

      <div className="intro-content">
        <h1>HTML Introduction</h1>
        <p>HTML is the standard markup language for creating Web pages.</p>
        <h2>What is HTML?</h2>
        <ul>
            <li>HTML stands for Hyper Text Markup Language</li>
            <li>HTML is the standard markup language for creating Web pages</li>
            <li>HTML describes the structure of a Web page</li>
            <li>HTML consists of a series of elements</li>
            <li>HTML elements tell the browser how to display the content</li>
            <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
        </ul>
        <h2>Simple HTML Example</h2>
       <p><button className="pre">Pre</button> <Link to="/htmlbasic"><button className="next">Next</button></Link></p>
      </div>
    </div>
  );
}