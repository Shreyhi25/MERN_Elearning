import React from "react";
import Dashboard from "./Dashboard";
import "./desusercontent.css";
import { Link } from "react-router-dom";

export default function Dasboardcontent() {
  const localStorageName = localStorage.getItem("name");
  const name = localStorageName.toUpperCase();
  return (
    <div>
      {<Dashboard />}
      <h1 className="desuserlogin">Hello <span> {name}</span></h1>
      <div className="welimg"></div>
      <div className="welcomecontent"><h1><b>Now You Can Access Our Premium Courses </b></h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi itaque pariatur distinctio odit ut hic commodi sed, error praesentium omnis dolorem non cum labore repellat, maiores, assumenda totam velit voluptates?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea qui natus dolor. Quisquam quia culpa explicabo reiciendis nemo delectus hic adipisci maxime, consequatur corporis minus! Facere vel nobis esse. Dolores!
           </p>
           <Link to="/usercourses"><button className='btn_gtc'>GO TO COURSES</button></Link> 
           </div>
    </div>
  );
}
