import React from 'react';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Courses from './components/Courses/Courses';

const App = () => {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/courses' element={<Courses> </Courses>}></Route>


      </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
