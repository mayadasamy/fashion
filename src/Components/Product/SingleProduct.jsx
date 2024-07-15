import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaSearchPlus } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";



import "./singleProduct.css";    
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();

  // const [SingleProduct, setSingleProduct] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="card-single ">
          <div className="left-side">
            <img src={products.image} alt=""/>
           
          </div>
          <div className="right-side">
            <div className="product-info">
              <div className="product-name">
                <h1>{products.category}</h1>
                <div className="iconP">
                    <li><Link><FaSearchPlus /></Link></li>
                    <li><Link><FaUser /></Link></li>
                    <li><Link><MdOutlineShoppingCart /></Link></li>
                </div>
                
              </div>
              <div className="product-details">
                <h2>{products.title}</h2>
                <h4>$ {products.price}</h4>
                <h4 className="dis">$ 200</h4>
                <p>{products.description}</p>
              </div>
              <ul>
                <li><h2>SIZE</h2></li>
                <li className="bg">7</li>
                <li className="bg">8</li>
                <li className="bg">9</li>
                <li className="bg">10</li>
                <li className="bg">11</li>
              </ul>
              <ul>
                <li><h2>COLOR</h2></li>
                <li className="yellow"></li>
                <li className="black"></li>
                <li className="blue"></li>
              </ul>
              <span className="foot"><MdOutlineShoppingBag size={15}/> Buy Now</span>
              <span className="foot"><MdOutlineShoppingCart size={15}/> Add TO Cart</span>
            </div>
          </div>

         
  </div>
  
    </>
  );
};

export default SingleProduct;
