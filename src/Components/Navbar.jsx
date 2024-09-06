import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLockOpen, faLock, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const {total} = useContext(CartContext)
  const token = false;
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Pizzeriía Mamma Mia</Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto gap-4">
            <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>

            </li>

            {token ? (<> <li className="nav-item"><div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLock} />
              <Link to="/login" className="nav-link">Login</Link>

            </div>
             
            </li>
            <li className="nav-item"><div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLock} />
              <Link to="/register" className="nav-link">Register</Link>

            </div>
             
            </li>
            </>) : (<> <li className="nav-item"><div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLockOpen} />
              <Link to="/profile" className="nav-link">Profile</Link>

            </div>
             
            </li>
            <li className="nav-item"><div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLockOpen} />
              <Link to="/" className="nav-link">Logout</Link>

            </div>
             
            </li>
                </>)

            }
            
          </ul>
          <form className="ms-auto" role="search">
            <Link to="/cart">
            <button className="btn btn-outline-success ms-auto" type="submit">
              <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                Total: ${total.toLocaleString()}
              </button>
            </Link>
            
            </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
