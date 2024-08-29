import React from 'react';
import "./dashboard.css";
import{UserOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import  { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from "sweetalert"

 function Dashboard() {
  const localStorageEmail=localStorage.getItem("email");
  // const name = localStorageName.toUpperCase();
  var navigate = useNavigate();
  const items: MenuProps['items'] = [
    // {
    //   label: <Link to="/update">Profile</Link>,
    //   key: '0',
    // },
    {
      label: <span onClick={() => userDelete(localStorageEmail)}>Delete Account</span>,
      key: '1',
    },
    {
      type: 'divider',
    },
    
  ];

  const userDelete = async (localStorageEmail) => {
    console.log("delete", localStorageEmail);
    const isDelete = window.confirm("Are you sure you want to delete?");
    if (isDelete) {
      axios
        .post(`http://localhost:8001/api/delete/${localStorageEmail}`)
        .then((response) => {
          console.log("backend response: " + response);
          var strinData = JSON.stringify(response);
          console.log("strinData", strinData);
          var parseData = JSON.parse(strinData);
          console.log("parseData", parseData);

          if (localStorageEmail) {
            localStorage.removeItem("name");
            localStorage.removeItem("email");
            setTimeout(() => {
              navigate('/');
            }, 2000);
            swal({
              title: "Delete",
              text: "User Deleted Successfully",
              icon: "success",
              button: "OK",
            });
          } else {
            swal({
              title: "Delete",
              text: "User not Deleted",
              icon: "error",
              button: "OK",
            });
          }
        })
        .catch((error) => {
          console.log("backend error: " + error);
        });
    } else {
    }
  };

  const userLogout=async()=>{
    console.log("user called logout");
    localStorage.removeItem("email");
    var isUser=localStorage.removeItem("name");
    const name=localStorage.getItem("name");

    if(name==null||name==undefined||name=="undefined"||name=="") {
         navigate("/");
    }
    console.log("isUser",isUser);

}
  

   return (
    
    <div className="desheader">
 <div className="deslogo">
   <span className="destext">
     <i>EASY</i>
     <b>LEARN</b>
   </span>
 </div>
 <div className="desnav">
   <ul>
    <li>
    <Link to="/dashboardcontent">Home</Link>
    </li>
     <li>
     <Link to="/usercourses">Courses</Link>
     </li>
     <li>
     <Link to="/quiz">Quiz</Link>
     </li>
     <li>
     <Link to="/interviewquestion">Interview Question</Link>
     </li>
     <li>
     <Link to="/compiler">Compiler</Link>
     </li>
   </ul>
   
 </div>
 <div className="desuser">
 
 <Dropdown  menu={{ items }} trigger={['click']}>
    <a  onClick={(e) => e.preventDefault()}>
      <Space >

      <span className='usericon'><UserOutlined /></span>
      </Space>
    </a>
  </Dropdown>

 <button className="deslogout" onClick={userLogout}>Logout</button>

 </div>
 
 
 
</div>
)
 }
 export default Dashboard;
 
