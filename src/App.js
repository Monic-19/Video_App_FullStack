import React from 'react';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Courses from './components/Courses/Courses';
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ForgetPassword from "./components/Auth/ForgetPassword";
import ResetPassword from "./components/Auth/RestPassword";
import Contact from './components/Contact/Contact';



const App = () => {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/courses' element={<Courses> </Courses>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>


        <Route path='/resetpassword/:token' element={<ResetPassword></ResetPassword>}></Route>


      </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
