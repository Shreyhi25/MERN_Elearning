import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./register.css"
import swal from 'sweetalert';

export const Register = () => {
var navigate=useNavigate();
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [mobile,setMobile]=useState("");
console.log("Name onchange: " + name);

const handleRegister=(e)=> {

    e.preventDefault();
    console.log(
      "Name,Email,mobile,password in handleSubmit: " + name,
      email,
      mobile,
      password
    );

    
var formData= new FormData();

formData.append("name",name);
formData.append("email",email);
formData.append("password",password);
formData.append("mobile",mobile);
const regex1 = /^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/;
const regex2 = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
if(name.length<4){
    swal({
        title: "error",
        text: "name must be at least 4 characters",
        icon: "error",
        button: "OK",
      });
}
else if (!regex2.test(email)){
    swal({
        title: "error",
        text: "wrong email address",
        icon: "error",
        button: "OK",
      });
}
else if( !regex1.test(mobile)){
    swal({
        title: "error",
        text: "mobile number must be 10 digits and start from 6 or 7 or 8 or 9 ",
        icon: "error",
        button: "OK",
      });

}
else if( password.length<4){
    swal({
        title: "error",
        text: "password must be at least 4 characters",
        icon: "error",
        button: "OK",
      });

}
else{
    axios.post("http://localhost:8001/api/register",formData).then((response) =>{
    console.log(response);
    var stringData=JSON.stringify(response);
    console.log(stringData);
    var parseData=JSON.parse(stringData);
    console.log(parseData);

    if(parseData.data.status === "1")
    {
        setTimeout(()=>
        {
            navigate("/login");
        },)
        swal({
            title: "Register!",
            text: "You successfully registered",
            icon: "success",
            button: "OK",
          });
    }
    else{
        swal({
            title: "Registered Successfully",
            text: parseData.data.message,
            icon: "success",
            button: "OK",
          });
    }
}).catch((error)=>{
    console.log("error",error)
});
}


}


  return (
    <div>
        <div className="loginlogo">
       <Link to="/">
       <span className="logintext">
          <i>EASY</i>
          <b>LEARN</b>
        </span>
       </Link></div>
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
                                <td className='regsubmit'><button onClick={handleRegister}>Register</button><Link to="/login"><span>Already register? Login</span></Link></td>
                                
                            
                        </tr>
                </table>
        </form>
    </div>

    </div>
  )
}
