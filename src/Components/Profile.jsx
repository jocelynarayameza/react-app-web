import React, { useState } from "react";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";

const Profile = () => {
  const [email, setEmail] = useState("");
  const { profileInfo, logout } = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      const userProfile = await profileInfo();
        setEmail(userProfile.email); 
    };
    getData();
  }, []); 


  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Perfil</h2>
      <p className="mb-3 text-dark">{email}</p>
      <button className="btn btn-danger mb-3" onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
