import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const Pizza = () => {
  const [pizza, setPizza] = useState({});
  const obtenerPizza = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas/p001");
    const pizza = await response.json();
    setPizza(pizza);
  };
  useEffect(() => {
    obtenerPizza();
  }, []);

  return (
    <div className="card w-50 m-auto">
      <img src={pizza.img} className="card-img-top w-25" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{pizza.name}</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div>
            <h6>{pizza.desc}</h6>
            <h6 className="text-center">Ingredientes:</h6>
            <div className="d-flex justify-content-around gap-2">
              <FontAwesomeIcon icon={faPizzaSlice} />
              <ul>
                {pizza.ingredients ? (
                  pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))
                ) : (
                  <li>No hay ingredientes disponibles</li>
                )}
              </ul>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div>
            <h4>Precio: $ {pizza.price}</h4>
            <div className="d-flex justify-content-evenly">
              <button className="btn btn-light border-black  ">Ver más</button>
              <button className="btn btn-dark ">Añadir</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Pizza;
