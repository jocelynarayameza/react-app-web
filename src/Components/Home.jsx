import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import pizzas from "./pizzas.js";
import "../assets/css/cardPizza.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container d-flex flex-wrap justify-content-around">
     
          {pizzas.map((pizza, index) => (
            <div key={index} className="col-3 m-4">
              <CardPizza pizzas={pizza} />
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default Home;
