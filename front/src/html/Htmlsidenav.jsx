import React from 'react'
import "./htmlsidenav.css"
import { Link } from 'react-router-dom'

export default function Htmlsidenav() {
  return (
    <div className="sidenav">
<ul>
<Link to="/htmlintro"> <li>HTML Intro</li></Link>
    <Link to="/htmlbasic"><li>HTML Basic</li></Link>
   <li>HTML Attribute</li>
    <li>HTML Heading</li>
    <li>HTML Paragraphs</li>
    <li>HTML Styles</li>
    <li>HTML Comment</li>
    <li>HTML Colors</li>
    <li>HTML Link</li>
    <li>HTML Image</li>
    <li>HTML Table</li>
    <li>HTML List</li>
    <Link to="/usercourses"><button className='gth'>GO TO HOME</button></Link>
</ul>
</div>
  )
}
