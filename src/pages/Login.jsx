import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const {email, setEmail, password, setPassword, handleSubmit} = useContext(UserContext)

  return (
    <div>
      <h1 className="text-center">Login</h1>
      <form className="w-50 mx-auto my-4" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="inputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail1"
            aria-describedby="emailHelp"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inputPassword1">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword1"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="text-dark"></p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
