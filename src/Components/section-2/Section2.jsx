import React from 'react'
import './section2.css'
import { Link } from 'react-router-dom'
import offerImg1 from '../../images/shop_banner_img1.jpg'
import offerImg2 from '../../images/shop_banner_img2.jpg'

const Section2 = () => {
  return (
    <>

      <div className="section2">
       
          <div className="section2_content">
                <div className="section2_left">
                        <img src={offerImg1} alt="" />
                        <div className="sec_left_content">
                            <h5>Super Sale</h5>
                            <h3>New Collection</h3>
                            <button><Link to="/">Shop Now</Link></button>
                        </div>

                </div>

                <div className="section2_right">
                        <img src={offerImg2} alt="" />
                        <div className="sec_right_content">
                            <h5>New Season</h5>
                            <h3>Sale 40% Off</h3>
                            <button><Link to="/">Shop Now</Link></button>
                        </div>

                </div>


          </div>
          
        </div>
       
      
    </>
  )
}

export default Section2
