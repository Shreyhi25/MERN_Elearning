import React, { useState } from "react";
import "./forgetpass.css";
import {Link, useNavigate } from 'react-router-dom';
import bg from "D:/elearning/elearning/front/src/bg.jpg";
import axios from "axios";
import swal from 'sweetalert';

export default function Forgetpass() {
  var navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmpassword", confirmpassword);
    console.log(formData);
    if (password === confirmpassword) {
      axios
        .post("http://localhost:8001/api/forgetPassword", formData)
        .then((response) => {
          var stringData = JSON.stringify(response);
          var parseData = JSON.parse(stringData);
          console.log(parseData);
          console.log(stringData);

          if (parseData.data.status === "1") {
            setTimeout(()=>
            {
                navigate("/login");
            },)
            // alert(parseData.data.message);
            swal({
              title: "success",
              text: parseData.data.message,
              icon: "success",
              button: "OK",
            });
          } else {
            // alert(parseData.data.message);
            swal({
              title: "error",
              text: parseData.data.message,
              icon: "error",
              button: "OK",
            });
          }
        });
    } else {
      // alert("password not matched");
      swal({
        title: "error",
        text: "password not matched",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <div>
      <div className="forgetlogo">
        <Link to="/">
        <span className="forgettext">
          <i>EASY</i>
          <b>LEARN</b>
        </span></Link>
      </div>
      <div className="forgetImg">
        <img src={bg} alt="" />
      </div>
      <div className="forgetHeading">
        <h1>Forget Password</h1>
      </div>
      <div class="forgetForm">
        <form>
          <table>
            <tr>
              <td>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter New password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  placeholder="Enter Confirm password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                />
              </td>
            </tr>

            <tr className="forgetsubmit">
              <td>
                <button onClick={handleUpdate}>UPDATE</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}
