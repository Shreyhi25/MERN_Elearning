import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./register.css"
import swal from 'sweetalert';
import Dashboard from './Dashboard'

export default function Update() {
  const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [mobile,setMobile]=useState("");
  return (
    <div>
{<Dashboard/>}
<div className="regImg">
            
            </div>
 
 <div className='regHeading'>
         <h1>Registration</h1>
     </div>
     <div className='regForm'>
         <form>
             <p className='manda'>* are mandatory field!</p>
                 <table>
                     <tr>
                         <td><label for="Name">Name</label></td>
                         <td><input type="text" name="name" id="name" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)}/><span className='astrik'>*</span> </td>
                         
                     </tr>
                    
                     <tr>
                         <td><label for="Email">Email</label></td>
                         <td><input type="email" name="email" id="email" placeholder="Enter your Email" value={email} onChange={(e)=> setEmail(e.target.value)}/><span className='astrik'>*</span> </td>
                         
                     </tr>
                     <tr>
                         <td><label for="Mobile">Mobile Number</label></td>
                         <td><input type="number" name="mobile" id="mno" placeholder="Enter your Mobile Number" value={mobile} maxlength="10" onChange={(e)=> setMobile(e.target.value)}/><span className='astrik'>*</span> </td>
                         
                     </tr>
                     <tr>
                         <td><label for="Password">Password</label></td>
                         <td><input type="password" name="password" id="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/><span className='astrik'>*</span></td>
                         
                     </tr>
                     
                         
                         <tr>
                             <td></td>
                                 <td className='regsubmit'><button >Register</button><Link to="/login"><span>Already register? Login</span></Link></td>
                                 
                             
                         </tr>
                 </table>
         </form>
     </div>
 
     </div>
   
   
  )
}
