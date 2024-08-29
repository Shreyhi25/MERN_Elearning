import React from 'react'
import Dashboard from './Dashboard'
import "./interviewquestions.css"

export default function Interviewquestions() {
  return (
    <div>{<Dashboard/>}
    <div className='interviewhaeder'>
      <h1>Top Interview Question </h1>
<h3>1) What is HTML?</h3>
<p>HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web. It makes the text more interactive and dynamic. It can turn text into images, tables, links.
</p> <br />
<h3>2) What are Tags?</h3>
<p>HTML tags are composed of three things: an opening tag, content and ending tag. Some tags are unclosed tags. <br />
HTML documents contain two things:content, and tags <br /> 
When a web browser reads an HTML document, the browser reads it from top to bottom and left to right. HTML tags are used to create HTML documents and render their properties. Each HTML tags have different properties.</p> <br />
<h3>3) Do all HTML tags have an end tag?</h3>
<p>No. There are some HTML tags that don't need a closing tag. For example: image tag, br tag.</p> <br />
<h3>4) What is formatting in HTML?</h3>
<p>The HTML formatting is a process of format the text for a better look and feel. It uses different tags to make text bold, italicized, underlined.</p> <br />
<h3>
5) How many types of heading does an HTML contain?</h3>
<p>The HTML contains six types of headings which are defined with the h1 to h6 tags. Each type of heading tag displays different text size from another. So, h1 is the largest heading tag and h6 is the smallest one.</p> <br />
  <h3>6) How to create a hyperlink in HTML?</h3>
  <p>The HTML provides an anchor tag to create a hyperlink that links one page to another page. These tags can appear in any of the following ways: <br />

Unvisited link - It is displayed, underlined and blue. <br />
Visited link - It is displayed, underlined and purple. <br />
Active link - It is displayed, underlined and red.</p> <br />
<h3>7) What are some common lists that are used when designing a page?</h3>
<p>There are many common lists which are used to design a page. You can choose any or a combination of the following list types: <br />

Ordered list - The ordered list displays elements in numbered format. It is represented by ol tag. <br />
Unordered list - The unordered list displays elements in bulleted format. It is represented by ul tag. <br />
Definition list - The definition list displays elements in definition form like in dictionary. The dl, dt and dd tags are used to define description list.</p>

    </div>
    
    
    </div>
  )
}
