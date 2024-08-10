import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setError(false);
    setEmail("");
    setPassword("");

    alert("Formulario enviado ")
  };

  return (
    <div>
      <h1 className="text-center">Login</h1>
      <form className="w-50 mx-auto my-4" onSubmit={validarDatos}>
        {error ? <p className="text-dark">{error}</p> : null}
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
