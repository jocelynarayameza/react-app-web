import React from "react";
import "../assets/css/cardPizza.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPizzaSlice} from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardPizza = ({pizzas}) => {
  const {addItem } = useContext(CartContext);

  return (
    <div className="card">
      <img src={pizzas.img} className="card-img-top w-25" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{pizzas.name}</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div>
            <h6>{pizzas.desc}</h6>
            <h6 className="text-center">Ingredientes:</h6>
            <div className="d-flex justify-content-around gap-2">
              <FontAwesomeIcon icon={faPizzaSlice} />
              <ul>
                {pizzas.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              </div>
          </div>
        </li>
        <li className="list-group-item">
          <div>
            <h4>Precio: $ {pizzas.price}</h4>
            <div className="d-flex justify-content-evenly">
            <button className="btn btn-light border-black  ">Ver más</button>
            <button className="btn btn-dark" onClick={()=> addItem(pizzas )}>Añadir</button>
            </div>
            

          </div>
        </li>
      </ul>
    </div>
  );
};

export default CardPizza;
