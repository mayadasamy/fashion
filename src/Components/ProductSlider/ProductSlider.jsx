
import './productSlider.css'
import React ,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import { BiCartDownload } from "react-icons/bi";
import { TfiControlShuffle } from "react-icons/tfi";
import { FaSearchPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductSlice from "../../Redux/ProductSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
    const [products, setProducts] = useState([]);
  const Dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };


  
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    {/* <section className="allProduct">
        <div className="product_title">
          <h2>Featured Products</h2>
      
        </div>




        
        <div className="container_product">
        <Slider {...settings}>

        {
          products?.map((el ,idx)=>(
            
          <div className="card_product" key={idx }>
            <div className="imgBx">
              <img src={el.image} alt="" />
            </div>

            <div className="contentBx">
              <h2><Link to={`/product/${el.id}`}>{el.title}</Link></h2>

              <h3>${el.price}</h3>
              <div className="rate">
                <div className="rateIcon">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </div>

                <div className="rating_num">({el.rating.rate})</div>
              </div>

              <div className="hov">
                <div className="icon-p">
                  <ul>
                    <li>
                    
                     <Link  onClick={() => {
              Dispatch(ProductSlice.actions.addToCart(el));
            }}>
                        <BiCartDownload />
                      </Link> 
                    </li>
                    <li>
                      <Link to="#">
                        <TfiControlShuffle />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaSearchPlus />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <CiHeart />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="color">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            </div>
          

          ))
        }

        </Slider>
        </div>
       













      </section> */}


      
    </>
  )
}

export default ProductSlider
