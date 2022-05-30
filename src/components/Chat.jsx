import React, { useContext, useRef, useEffect } from "react";
import Agregar from "./Agregar";

import { ChatContext } from "../context/ChatProvider";

const Chat = () => {
  const { mensajes, usuario } = useContext(ChatContext);
  const refZonaChat = useRef(null);

  useEffect(() => {
    console.log(refZonaChat);
    refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight;
  }, [mensajes]);
  console.log(usuario);
  console.log(mensajes);
  return (
    <div
      className="mt-3 px-2 container bg-light"
      style={{ height: "75vh", overflowY: "scroll" }}
      ref={refZonaChat}
    >
      {mensajes.map((item, index) =>
        usuario.uid === item.uid ? (
          <div className="d-flex justify-content-end mb-2" key={index}>
            <h5>
              <span className="badge badge-pill badge-primary ">
                {item.texto}
              </span>
            </h5>
          </div>
        ) : (
          <div className="d-flex justify-content-start mb-2" key={index}>
            <h5>
              <span className="badge badge-pill badge-secondary ">
                {item.texto}
              </span>
            </h5>
          </div>
        )
      )}

      <Agregar />
    </div>
  );
};

export default Chat;
