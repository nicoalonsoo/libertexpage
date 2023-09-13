import React, { useEffect } from "react";
import "./LandingVideo.css";
import DropboxVideo from "../../componentes/Video/Video";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import { eventViewContent } from "../../utils/pixelEvents/PixelEvents";
const LandingVideo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    eventViewContent();
  };

  return (
    <div>
      <Header />
      <div className="text-center py-8 max-w-[1200px] mx-auto">
        <h3
          className="text-lg md:text-2xl mb-4 font-bold mx-4 my-4 md:my-0"
          style={{ marginBottom: "1rem" }}
        >
          {" "}
          COMO LOGRAR OBTENER UNA RENTABILIDAD DEL{" "}
          <span className="underline">10%</span> AL{" "}
          <span className="underline">30%</span> MENSUAL HACIENDO COPYTRADING DE
          LA MANO DE UN EXPERTO
        </h3>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          PASO 1: MIRA EL VIDEO
        </h1>
        <div className="mx-auto max-w-[700px] mb-8 mt-8">
          <DropboxVideo/>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          PASO 2: REGISTRATE EN NUESTRA ACADEMIA
        </h1>

        <h3 className="text-sm md:text-lg font-bold text-red-500 mb-4 mx-4 my-4 md:my-0">
          *Si ya tienes cuenta en Libertex puedes registrarte con el mismo
          nombre y número de teléfono pero distinto email.
        </h3>
        <h3 className="text-sm md:text-lg font-bold text-red-500 mb-4 mx-4 my-4 md:my-0">
          *Solamente regístrate si tienes más de $100 dólares para depositar en
          tu cuenta de trading
        </h3>
        <h3
          className="text-sm md:text-lg font-bold text-red-500 mb-4 mx-4 my-4 md:my-0"
          style={{ marginBottom: "1rem" }}
        >
          *No somos una empresa multinivel ni un fondo de inversión, somos una
          academia de trading asociada al broker Libertex.
        </h3>
        <a
          href="https://go.libertex-affiliates.com/visit/?bta=55770&nci=17906"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="ov-btn-slide-left max-w-[700px] text-white text-2xl py-4 px-6 rounded-lg mb-4 mx-2 my-4 md:my-0"
            onClick={() => handleClick()}
          >
            REGÍSTRATE!
            <p className="text-10px sm:text-0.875rem">
              (sólo para personas que quieren iniciarse en el trading o que ya
              se iniciaron pero no tienen buenos resultados).
            </p>
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default LandingVideo;
