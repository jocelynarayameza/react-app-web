import React from "react";
import {Link} from "react-router-dom"


const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center text-dark">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-4 text-dark">
          Oops! No encontramos tu página.
        </p>

        <Link to="/" className="text-primary text-decoration-none">Volver al Home</Link>
        
      </div>
    </div>
  );
};

export default NotFound;
