import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLockOpen, faLock, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const {user, logout, state } = useContext(UserContext)
  const {total} = useContext(CartContext)

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand"   to="/"  >Pizzeriía Mamma Mia</NavLink>
        
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
            <NavLink to="/" className={ ({ isActive }) => (isActive ? "text-success nav-link " : "nav-link ") }>Home</NavLink>

            </li>

            {!state ? (<> <li className="nav-item"><div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLock} />
              <NavLink to="/login" className="nav-link">Login</NavLink>

            </div>
             
            </li>
            <li className="nav-item"><div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLock} />
              <NavLink to="/register" className="nav-link">Register</NavLink>

            </div>
             
            </li>
            </>) : (<> <li className="nav-item"><div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLockOpen} />
              <NavLink to={state == true ?  "/profile" : "/login" }  className={({ isActive }) => (isActive ? "text-success nav-link" : "nav-link")} 
              >Profile</NavLink>

            </div>
             
            </li>
            <li className="nav-item"><div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLockOpen} />
              <NavLink to="/" className="nav-link" onClick={logout}>Logout</NavLink>

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
