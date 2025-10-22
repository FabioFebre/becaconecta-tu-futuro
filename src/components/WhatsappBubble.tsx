import React, { useState, MouseEvent } from "react";
import "./WhatsappBubble.css";

interface WhatsappBubbleProps {
  number?: string; 
  name?: string;   
}

const WhatsappBubble: React.FC<WhatsappBubbleProps> = ({
  number = "51916767550",
  name = "Atención al cliente",
}) => {
  const [isActive, setIsActive] = useState(false);

  const togglePopup = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(".popup")) return;
    setIsActive((prev) => !prev);
  };

  return (
    <div className="whatsapp-bubble" id="whatsappBubble" onClick={togglePopup}>
      {/* Ícono principal de WhatsApp */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        id="whatsappIcon"
        className={!isActive ? "rotate" : ""}
        style={{ opacity: isActive ? 0 : 1 }}
      />

      {/* SVG de la “X” */}
      <svg
        id="closeIcon"
        className={`close-icon ${isActive ? "active" : ""}`}
        width="40"
        height="40"
        viewBox="0 0 40 40"
      >
        <line className="line1" x1="10" y1="10" x2="30" y2="30" />
        <line className="line2" x1="30" y1="10" x2="10" y2="30" />
      </svg>

      {/* Popup emergente */}
      <div className={`popup ${isActive ? "active" : ""}`} id="whatsappPopup">
        {/* Contenedor superior (verde) */}
        <div className="popup-top">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="popup-icon"
          />
          <div className="popup-texts">
            <span className="popup-text top-text">Comuníquese por WhatsApp</span>
            <span className="popup-text bottom-text">
              Haga click en el número para hablar por WhatsApp
            </span>
          </div>
        </div>

        {/* Contenedor inferior (blanco) */}
        <div className="popup-bottom">
          <a
            href={`https://wa.me/${number}?text=Hola%20me%20gustaría%20más%20información`}
            target="_blank"
            rel="noopener noreferrer"
            className="popup-contact"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="popup-icon-small"
            />
            <div className="popup-contact-info">
              <span className="contact-name">{name}</span>
              <span className="contact-number">+{number}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsappBubble;
