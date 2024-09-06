import React from "react";
//import cartPizza from "./pizzas.js";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {

  const { cart, clearCart, total, increaseQuantity, decreaseQuantity, totalQuantity } = useContext(CartContext);


  const cantidadProducto = (pizza) => {
    const obtProd = cart.find((item) => item.id === pizza.id);
    return obtProd ? obtProd.cantidad : 0;
  };


  return (
    <div>
      <h1>Carrito de compras</h1>
      <div className="container d-flex flex-wrap justify-content-around">
      {cart.map((pizza, index) => (
        <div key={index} className="col-4" >
          <div className="card m-3">
            <img src={pizza.img} className="card-img-top w-25" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{pizza.name}</h4>
              <h3>{pizza.price}</h3>
            </div>
            <div>
              <button
                className="btn btn-success m-3"
                onClick={() => increaseQuantity(pizza)}
              >
                +
              </button>
              <button
                className="btn btn-danger m-3"
                onClick={() => decreaseQuantity(pizza)}
              >
                -
              </button>
              Cantidad: {cantidadProducto(pizza)}
            </div>
          </div>
        </div>
      ))}
      </div>
      <button className="btn btn-danger" onClick={()=>clearCart()}>Limpiar carrito</button>

      <h2>Cantidad total de productos: {totalQuantity} </h2>
      <h3>Total a pagar: {total}</h3>
    </div>
  );
};

export default Cart;
