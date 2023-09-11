import React, { useState } from "react";
import beer from "../../multimedia/beer.gif";
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
    history.push('/video');
  };

  return (
    <div>
      <Header />
      <div className="text-center py-8 max-w-[1100px] mx-auto">
        <h3 className="text-1xl font-bold text-red-500 mb-4">
          🚨 SOLO PARA COACHES, INFOPRODUCTORES O AGENCIAS DE MARKETING QUE YA
          TIENEN CLIENTES. 🚨
        </h3>
        <h3 className="text-2xl mb-4">
          Nuevo vídeo de alrededor de 6 minutos revela...
        </h3>
        <h1 className="text-5xl font-bold mb-4">
          COMO CRECER A 10K, 20K O INCLUSO 50K USD AL MES TU NEGOCIO DE
          COACHING, INFOPRODUCTOS O AGENCIA...
        </h1>
        <h3 className="text-2xl mb-4">
          ...Copiando y pegando nuestro sistema que nos genera +170.000 USD /
          mes con +60% de rentabilidad luego de gastos e impuestos (a la vez que
          delegas tu empresa en un equipo que lo hace todo).
        </h3>
        <div className="mx-auto max-w-[700px] mb-8 mt-8">
          <img
            src={beer}
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
          QUIERO VER ESTE VIDEO
          <p className="text-sm">
            SOLO PARA COACHES, INFOPRODUCTORES O AGENCIAS DE MARKETING
          </p>
        </button>
        <h3 className="text-1xl font-bold text-red-500 mb-4">
          *Si NO tienes un negocio de coaching, infoproductos o servicios de
          marketing, que YA TENGA CLIENTES, no te registres porque esto no va a
          funcionar para ti.
        </h3>
        <h3 className="text-1xl font-bold text-red-500 mb-4">
          *NO ayudamos a multiniveles, negocios físicos, afiliados, ecommerce,
          principiantes sin clientes y demás.
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
              <Registro 
              actualizarEstado={actualizarEstadoPadre}
              />
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Landing;
