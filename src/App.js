import React, { useEffect } from 'react';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import HomeComp from './Routes/HomeComp'
import AboutComp from './Routes/AboutComp'
import ProductsComp from './Routes/ProductsComp';
import ContactUs from './Routes/ContactUs'
import CartComp from './Routes/CartComp'
import BlogComp from './Routes/BlogComp';

import Aos from 'aos';
import 'aos/dist/aos.css';
import SingleProductComp from './Routes/SingleProductComp';


function App() {

  useEffect(()=>{
    Aos.init();
  })
  return (
    <>
       <Routes>
          <Route path='/' element={<HomeComp/>}/>
          <Route path='/home' element={<HomeComp/>}/>
          <Route path='/about' element={<AboutComp/>}/>
          <Route path='/product' element={<ProductsComp/>}/>
          <Route path='/product/:id' element={<SingleProductComp/>}/>
          <Route path='/blog' element={<BlogComp/>}/>
          <Route path='/cart' element={<CartComp/>}/>
          <Route path='/contact' element={<ContactUs/>}/>

       </Routes>
     
    </>
  );
}

export default App;
