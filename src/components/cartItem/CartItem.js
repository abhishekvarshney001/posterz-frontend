// import React from "react";
// import dumyCartImg from "../../assets/naruto.jpeg";
// import { AiOutlineClose } from "react-icons/ai";
// import "./CartItem.scss";

// function CartItem() {
//   return (
//     <div className="CartItem">
//       <div className="item-img">
//         <img src={dumyCartImg} alt="" />
//       </div>
//       <div className="item-info-wrapper">
//         <div className="item-info">
//           <h4 className="title">Product Title here</h4>
//           <p className="price">₹ 459</p>
//           <div className="quantity-selector">
//             <span className="btn decrement">-</span>
//             <span className="quantity">3</span>
//             <span className="btn increment">+</span>
//           </div>
//           <p className="total-price">Subtotal: ₹ 4529</p>
//         </div>
//         <div className="item-remove">
//           <AiOutlineClose />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartItem;

import React from "react"

import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart,resetCart } from "../../redux/cartSlice";
import './CartItem.scss'

function CartItem({cart}) {
    
    const dispatch = useDispatch();
    return (
        <div className="CartItem">
            <div className="item-img">
                <img src={cart.image} alt="" />
            </div>
            <div className="item-info-wrapper">
                <div className="item-info">
                    <p className="title">{cart.title}</p>
                    <p className="price">₹ {cart.price}</p>
                    <div className="quantity-selector">
                        <span className="btn decrement" onClick={() => dispatch(removeFromCart(cart))}>-</span>
                        <span className="quantity">{cart.quantity}</span>
                        <span className="btn increment" onClick={() => dispatch(addToCart(cart))}>+</span>
                    </div>
                    <p className="total-price">Subtotal: ₹ {cart.quantity * cart.price}</p>
                </div>
                <div className="item-remove" >
                    <AiOutlineClose onClick={() => dispatch(removeFromCart(cart))}/>
                </div>
            </div>
        </div>
    );
}

export default CartItem;

