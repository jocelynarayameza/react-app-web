import React from "react";
import "../assets/css/cardPizza.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPizzaSlice} from '@fortawesome/free-solid-svg-icons'


const CardPizza = (props) => {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{props.titulo}</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div>
            <h6 className="text-center">Ingredientes:</h6>
            <div className="d-flex justify-content-center gap-2">
              <FontAwesomeIcon icon={faPizzaSlice} />
              <p className="text-dark">{props.ingredientes.join(", ")}</p>
              </div>
          </div>
        </li>
        <li className="list-group-item">
          <div>
            <h4>Precio: $ {props.precio}</h4>
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

export default CardPizza;
