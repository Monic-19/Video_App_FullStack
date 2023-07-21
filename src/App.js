import React from 'react';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Courses from './components/Courses/Courses';
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ForgetPassword from "./components/Auth/ForgetPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFailure from './components/Payments/PaymentFailure';
import NotFound from './components/Layout/NotFound';
import Course from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';



const App = () => {

  // window.addEventListener("contextmenu" , (e) => {e.preventDefault()})

  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/courses' element={<Courses> </Courses>}></Route>
        <Route path='/course/:id' element={<Course> </Course>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/request' element={<Request></Request>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


        <Route path='/resetpassword/:token' element={<ResetPassword></ResetPassword>}></Route>

        <Route path='/subscribe' element={<Subscribe></Subscribe>}></Route>
        <Route path='/payment/success' element={<PaymentSuccess></PaymentSuccess>}></Route>
        <Route path='/payment/fail' element={<PaymentFailure></PaymentFailure>}></Route>

        <Route path='/profile' element={<Profile></Profile>}></Route>


      </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
