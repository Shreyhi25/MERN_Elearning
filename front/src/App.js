import './App.css';
import Header from './Header';
import Content from './Content';
import { Register } from './Register';
import { Login } from './Login';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Dashboard from './Dashboard';
import Forgetpass from './Forgetpass';
import Courses from './Courses';
import About from './About';

import UserCourses from './UserCourses';

import Quiz from './Quiz';
import Dasboardcontent from './Dasboardcontent';
import Interviewquestions from './Interviewquestions';
import Htmlintro from './html/Htmlintro';
import Update from './Update';
import Htmlbasic from './html/Htmlbasic';
import Compiler from './Compiler';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Content/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/courses" element={<Courses/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/forget' element={<Forgetpass/>}></Route>
      <Route path='/usercourses' element={<UserCourses/>}>  </Route>
      <Route path="/htmlintro" element={<Htmlintro/>}></Route>
      <Route path="/quiz" element={<Quiz/>}></Route>
      <Route path="/dashboardcontent" element={<Dasboardcontent/>}></Route>
      <Route path='/interviewquestion' element={<Interviewquestions/>}></Route>
      <Route path='/update' element={<Update/>}></Route>
      <Route path='/htmlbasic' element={<Htmlbasic/>}></Route>
      <Route path='/compiler' element={<Compiler/>}></Route>
      <Route path='/htmlintro' element={<Htmlintro/>}></Route>
      <Route path='/compiler' element={<Compiler/>}></Route>


     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
