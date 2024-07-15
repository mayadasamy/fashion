import React, { useEffect, useState } from "react";
import "./product.css";
import { Link } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import { BiCartDownload } from "react-icons/bi";
import { TfiControlShuffle } from "react-icons/tfi";
import { FaSearchPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductSlice from "../../Redux/ProductSlice";

const Product = () => {
  const [products, setProducts] = useState([]);
  const Dispatch = useDispatch();


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
      <section className="allProduct">
        <div className="product_title">
          <h2>Exclusive Products</h2>
          <ul>
            <li>
              <Link>New Arrival</Link>
            </li>
            <li>
              <Link>Best Sellers</Link>
            </li>
            <li>
              <Link>Featured</Link>
            </li>
            <li>
              <Link>Special Offers</Link>
            </li>
          </ul>
        </div>





        <div className="container_product">

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


        </div>















        {/* // <div className="container_product">
        //   <div className="card_product">
        //     <div className="imgBx">
        //       <img src={Img} alt="" />
        //     </div>

        //     <div className="contentBx">
        //       <h2>blue dress</h2>

        //       <h3>$100</h3>
        //       <div className="rate">
        //         <div className="rateIcon">
        //           <MdStarRate />
        //           <MdStarRate />
        //           <MdStarRate />
        //           <MdStarRate />
        //           <MdStarRate />
        //         </div>

        //         <div className="rating_num">(4.5)</div>
        //       </div>

        //       <div className="hov">
        //         <div className="icon-p">
        //           <ul>
        //             <li>
        //               <Link to="#">
        //                 <BiCartDownload />
        //               </Link>
        //             </li>
        //             <li>
        //               <Link to="#">
        //                 <TfiControlShuffle />
        //               </Link>
        //             </li>
        //             <li>
        //               <Link to="#">
        //                 <FaSearchPlus />
        //               </Link>
        //             </li>
        //             <li>
        //               <Link to="#">
        //                 <CiHeart />
        //               </Link>
        //             </li>
        //           </ul>
        //         </div>

        //         <div className="color">
        //           <span className="c1"></span>
        //           <span></span>
        //           <span></span>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div> */}
      </section>
    </>
  );
};

export default Product;
