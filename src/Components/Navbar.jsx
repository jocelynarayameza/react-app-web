import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLockOpen, faLock, faCartShopping} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mia
        </a>
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
              <a className="nav-link" href="#">
                Home
              </a>
            </li>

            {token ? (<> <li className="nav-item"><div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLock} />
              <a className="nav-link" href="#">
                Login
              </a>
            </div>
             
            </li>
            <li className="nav-item"><div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLock} />
              <a className="nav-link" href="#">
                Register
              </a>
            </div>
             
            </li>
            </>) : (<> <li className="nav-item"><div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLockOpen} />
              <a className="nav-link" href="#">
                Profile
              </a>
            </div>
             
            </li>
            <li className="nav-item"><div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLockOpen} />
              <a className="nav-link" href="#">
                Logout
              </a>
            </div>
             
            </li>
                </>)

            }
            
          </ul>
          <form className="ms-auto" role="search">

              <button className="btn btn-outline-success ms-auto" type="submit">
              <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                Total: ${total.toLocaleString()}
              </button>
            </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
