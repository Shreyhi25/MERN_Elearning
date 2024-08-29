import React, { useState } from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
import Header from './Header'
import { useNavigate } from 'react-router-dom';
import bg from "D:/elearning/elearning/front/src/bg.jpg"
import axios from 'axios';
import swal from "sweetalert"
export const Login = () => {
const navigate = useNavigate();
const [email,setEmail] =useState("");
const [password,setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        var formData= new FormData();

        formData.append("email",email);
        formData.append("password",password);

        axios.post("http://localhost:8001/api/login",formData).then((response) => {
            var stringData = JSON.stringify(response);

            var parseData = JSON.parse(stringData);
            console.log(parseData);
            console.log(stringData);
            
            
                if (parseData.data.status == "1"){
                    setTimeout(() => {
                        navigate('/dashboardcontent');
                      }, 2000);
                    swal({
                        title: "login!",
                        text: "You successfully login",
                        icon: "success",
                        button: "OK",
                      });
                      localStorage.setItem("name",parseData.data.name);
                      localStorage.setItem("email",parseData.data.email);
                }
                else{
                  swal({
                        
                            text: parseData.data.message,
                            icon: "error",
                            
                          });
                }
                
               
            }).catch((error)=>{
        console.log("error",error)
    });
}

  return (
    <div>
        <div className="loginlogo">
       <Link to="/">
       <span className="logintext">
          <i>EASY</i>
          <b>LEARN</b>
        </span>
       </Link>
        <span className="newuser">New&nbsp;User&nbsp;?<Link to="/register"><a href=""> Register</a></Link></span>
        
        
      </div>
        <div className="loginImg">
        <img src={bg} alt="" />
           </div>
        <div className='loginHeading'>
        <h1>Welcome Back!</h1>
        <p>Login to continue</p>
    </div>
    <div class="loginForm">
        <form>
           
                   <table>
                    <tr>
                       
                        <td><input type="email" name="email" id="email" placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/></td>
                        
                    </tr>
                   
                    <tr>
                        
                        <td><input type="password" name="password" id="password" placeholder="Enter your password" value={password}
                         onChange={(e)=> setPassword(e.target.value)}/></td>
                        
                    </tr>
                    
                        
                        <tr className='loginsubmit'>
                          <td>{
                             email.length>0&&password.length>0?<button onClick={handleLogin}>LOGIN</button>:<button style={{cursor:"not-allowed"}}disabled onClick={handleLogin}>LOGIN</button>
                          } <Link to="/forget"><span className='forgetpass'>Forget Password</span></Link></td>
                            
                                
                                
                            
                        </tr>
                </table>
        </form>
    </div>
    </div>
  )
}
