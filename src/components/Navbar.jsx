import React, { useContext } from "react";
import { ChatContext } from "../context/ChatProvider";
import "./style.css";

const Navbar = () => {
  const { usuario, ingresoUsuario, cerrarSesion } = useContext(ChatContext);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark container">
        <span className="navbar-brand"> Chat</span>
        <div>
          {usuario.estado ? (
            <>
              <img src={usuario.photoURL} alt="foto" className="perfil mx-2" />
              <button
                className="btn btn-outline-danger my-2 mx-2"
                onClick={cerrarSesion}
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <button
              className="btn btn-outline-success my-2"
              onClick={ingresoUsuario}
            >
              Acceder
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
