import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const { registerHandler } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [error, setError] = useState(false);

  const validarDatos = () => {
    if (email === "" || password === "" || confirmarPassword === "") {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmarPassword) {
      setError("Las contraseñas deben coincidir");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    setError(false);
    return true;
  };

  const registrar = async (e) => {
    e.preventDefault();
    const validar = validarDatos();
    if (!validar) return;
    await registerHandler(email, password);
    setEmail("");
    setPassword("");
    setConfirmarPassword("");
  };

  return (
    <div>
      <h1 className="text-center">Register</h1>
      <form className="w-50 mx-auto my-4" onSubmit={registrar}>
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
          <small id="emailHelp" className="form-text text-muted">
            Nunca compartiremos tu dirección de email.
          </small>
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
        <div className="form-group">
          <label htmlFor="inputPassword2">Repetir contraseña</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword2"
            placeholder="Repite tu contraseña"
            value={confirmarPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
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

export default Register;
