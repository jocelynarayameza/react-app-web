import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("token_jwt", data.token);
        setState(true);
        alert("Logueado exitosamente");
        navigate("/");
      } else alert("Logueo incorrecto");
    } catch (error) {
      throw new Error(error);
    }
  };

  const logout = () => {
    setState(false);
    setEmail("");
    setPassword("");
    localStorage.removeItem("token_jwt");
    navigate("/");

  };

  const profileInfo = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_jwt")}`,
        },
      });
      const user = await response.json();
      return user;
    } catch {
      console.error(error);
    }
  };

  const registerHandler = async(email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("token_jwt", data.token);
        alert("Registrado exitosamente");
        navigate("/");
      } else alert("Registro incorrecto");
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        logout,
        handleSubmit,
        state,
        profileInfo,
        registerHandler
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
