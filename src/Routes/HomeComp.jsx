import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import Footer from '../Components/Footer/Footer'
import Section2 from '../Components/section-2/Section2'
import Product from '../Components/Product/Product'
import ProductSlider from '../Components/ProductSlider/ProductSlider'
const HomeComp = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Section2/>
      <Product/>
      <ProductSlider/>
      <Footer/>
    </div>
  )
}

export default HomeComp
