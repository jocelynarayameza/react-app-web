import React, {useState, useEffect} from "react";
import Header from "../Components/Header";
import CardPizza from "../Components/CardPizza";
import "../assets/css/cardPizza.css";


const Home = () => {
  const [pizzas, setPizzas] = useState([]); 

  const obtenerPizzas = async () => {
    let response = await fetch("http://localhost:5000/api/pizzas")
    let pizzas = await response.json();
    setPizzas(pizzas)
    } 
    
    useEffect(() => {
      obtenerPizzas();
    }, []);
    
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
