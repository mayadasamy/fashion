import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import { useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import "./cart.css";
import ProductSlice from "../../Redux/ProductSlice";



const Cart = () => {
  const [products, setProducts] = useState();
  const dispatch = useDispatch();
   const cartProducts = useSelector((state) => state.Product.items);

  useEffect(() => {


    setProducts(cartProducts)


  },[cartProducts])




  return (
    <>
      <div className="container_product">
       
       

        {
  products?.map((el ,idx)=>(
    
  <div className="card_product" key={idx}>
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

      <div className="buttons-cart">
        <button className="read-btn"><Link to={`/product/${el.id}`}>Read More</Link></button>
        <button className="delete-btn" onClick={()=>dispatch(ProductSlice.actions.removeFromCart(el))} ><BsTrash /></button>

      </div>
    




    
    </div>
    </div>
  

  ))
}
      </div>
    </>
  );
};

export default Cart;
