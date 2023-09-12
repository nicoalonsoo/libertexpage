import React, { useState } from "react";
import imgvid from "../../multimedia/imgvid.jpeg";
import "./Landing.css";
import Registro from "../../componentes/Registro/Registro";
import { useHistory } from "react-router-dom";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
const Landing = () => {
  const history = useHistory();
  const [showForm, setShowform] = useState(false);
  const handleImageHover = (e) => {
    e.target.classList.toggle("hovered-image");
    e.target.style.cursor = "pointer";
  };

  const handleClick = (click) => {
    setShowform(click);
  };

  const actualizarEstadoPadre = (estado) => {
    setShowform(estado);
    history.push("/video");
  };

  return (
    <div>
      <Header />
      <div className="text-center py-8 max-w-[1100px] mx-auto">
        <h3 className="text-1xl font-bold text-red-500 mb-4">
          🚨 SOLO PARA PERSONAS QUE SE ESTÁ INICIANDO EN EL TRADING O QUE YA SE
          INICIARON PERO NO TIENEN BUENOS RESULTADOS. 🚨
        </h3>
        <h3 className="text-2xl mb-4">Nuevo video de 5 minutos revela...</h3>
        <h1 className="text-5xl font-bold mb-4">
          COMO LOGRAR OBTENER UNA RENTABILIDAD DEL 10 AL 30% MENSUAL HACIENDO
          COPYTRADING DE LA MANO DE UN EXPERTO
        </h1>
        <h3 className="text-2xl mb-4">
          copiando y pegando nuestra estrategia que nos viene generando en
          promedio un 29% mensual en los últimos dos años. Vas a poder ingresar
          100% GRATIS cumpliendo dos requisitos.
        </h3>
        <div className="mx-auto max-w-[700px] mb-8 mt-8">
          <img
            src={imgvid}
            alt="hombre"
            className="transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110"
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageHover}
            onClick={() => handleClick(true)}
          />
        </div>
        <button
          className="ov-btn-slide-left max-w-[700px] text-white text-2xl py-4 px-6 rounded-lg mb-4"
          onClick={() => handleClick(true)}
        >
          QUIERO VER ESTE BREVE VIDEO
          <p className="text-sm">
            (SOLO PARA PERSONAS QUE SE ESTÁ INICIANDO EN EL TRADING O QUE YA SE
            INICIARON PERO NO TIENEN BUENOS RESULTADOS.)
          </p>
        </button>
        <h3 className="text-1xl font-bold text-red-500 mb-4">
          *Si no tienes mínimo $100 dólares para depositar en tu cuenta de
          trading no te registres poruqe esto no va funcionar para ti.
        </h3>
        <h3 className="text-1xl font-bold text-red-500 mb-4">
          *No somos una empresa multinivel, ni un fondo de inversión. Somos una
          academia de trading partner oficial del broker Libertex.
        </h3>
      </div>
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 opacity-50 z-40"
            onClick={() => handleClick(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Registro actualizarEstado={actualizarEstadoPadre} />
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Landing;
