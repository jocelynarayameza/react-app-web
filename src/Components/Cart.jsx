import React from "react";
import cartPizza from "./pizzas.js";
import { useState } from "react";

const Cart = () => {
  const [carrito, setCarrito] = useState([]);
  const aumentarCantidad = (pizza) => {
    let nuevaPizza = {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      cantidad: 1,
    };
    let encontrarPizza = carrito.find((item) => item.id === pizza.id);

    if (encontrarPizza) {
      setCarrito(
        carrito.map((item) =>
          item.id === encontrarPizza.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, nuevaPizza]);
    }
  };

  const disminuirCantidad = (pizza) => {
    let encontrarPizza = carrito.findIndex((item) => item.id === pizza.id);
    let nuevoCarrito = [...carrito];
    if (encontrarPizza >= 0) {
      if (nuevoCarrito[encontrarPizza].cantidad > 1) {
        nuevoCarrito[encontrarPizza].cantidad--;
      } else {
        nuevoCarrito.splice(encontrarPizza, 1);
      }
      setCarrito(nuevoCarrito);
    }
  };

  const cantidadProducto = (pizza) => {
    const obtProd = carrito.find((item) => item.id === pizza.id);
    return obtProd ? obtProd.cantidad : 0;
  };

const totalProductos = () => {
    return carrito.reduce((acc, pizza) => acc += pizza.cantidad, 0)
}

const precioTotal = () => {
    return carrito.reduce((acc, pizza) => acc += (pizza.cantidad * pizza.price), 0)
}

  return (
    <div>
      <h1>Carrito de compras</h1>
      <div className="container d-flex flex-wrap justify-content-around">
      {cartPizza.map((pizza, index) => (
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
                onClick={() => aumentarCantidad(pizza)}
              >
                +
              </button>
              <button
                className="btn btn-danger m-3"
                onClick={() => disminuirCantidad(pizza)}
              >
                -
              </button>
              Cantidad: {cantidadProducto(pizza)}
            </div>
          </div>
        </div>
      ))}
      </div>
      

      <h2>Cantidad total de productos: {totalProductos()} </h2>
      <h3>Total a pagar: {precioTotal()}</h3>
    </div>
  );
};

export default Cart;
