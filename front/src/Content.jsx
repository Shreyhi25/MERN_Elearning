import React from 'react';
import "./content.css";
import Header from './Header';
import { Link } from 'react-router-dom';

export default function Content() {
  

  
  return (
    <div >
       <Header/>
           <div className="mainImg">
           </div>
           <div className='text1'>
            <h3><i>EASY'</i>
          <b>LEARN</b></h3>
           </div>
           <div className="text2">
           <h1><b>Best Education Platform <br/>For Learning</b></h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi itaque pariatur distinctio odit ut hic commodi sed, error praesentium omnis dolorem non cum labore repellat, maiores, assumenda totam velit voluptates?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea qui natus dolor. Quisquam quia culpa explicabo reiciendis nemo delectus hic adipisci maxime, consequatur corporis minus! Facere vel nobis esse. Dolores!
           </p>
          <Link to="register"><button className='btn_sn'>START NOW</button></Link> 

           
          
           </div>
        
    </div>
  )
}
