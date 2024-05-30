import React, { useEffect } from "react";
import "./LandingVideo.css";
import DropboxVideo from "../../componentes/Video/Video";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import { eventViewContent } from "../../utils/pixelEvents/PixelEvents";
import WhatsAppButton from "../../componentes/Whatsapp/WhatsappButton";

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
          className=" text-bnalance font-podium font-medium text-2xl lg:text-5xl mx-2 my-4 md:my-0"
          style={{ marginBottom: "1rem" }}
        >
          {" "}
          COMO LOGRAR OBTENER UNA RENTABILIDAD DEL{" "}
          <span className="underline text-[#ff6634]">10%</span> AL{" "}
          <span className="underline text-[#ff6634]">30%</span> MENSUAL HACIENDO
          COPYTRADING DE LA MANO DE UN EXPERTO
        </h3>
        <h1 className="text-[#ff6634] font-montserrat-600 text-3xl md:text-5xl font-bold">
          PASO 1: MIRA EL VIDEO
        </h1>
        <div className="mx-auto max-w-[700px] mb-4 mt-4">
          <DropboxVideo />
        </div>
        <h1 className="text-[#ff6634] font-montserrat-600 text-3xl md:text-5xl font-bold mb-4">
          PASO 2: REGISTRATE EN NUESTRA ACADEMIA
        </h1>
        <div className="flex flex-col justify-start items-center border-[2px] border-red-500 mx-2 space-y-4 py-4">
          {/* <h3 className="text-sm md:text-lg font-bold text-red-500  mx-2 text-left">
            *Si ya tienes cuenta en Libertex puedes registrarte con el mismo
            nombre y número de teléfono pero distinto email.
          </h3> */}
          <h3 className="text-sm md:text-lg font-bold text-red-500 mx-2 text-left">
            *Solamente regístrate si tienes más de $100 dólares para depositar
            en tu cuenta de trading
          </h3>
          {/* <h3
            className="text-sm md:text-lg font-bold text-red-500  mx-2 text-left"
           
          >
            *No somos una empresa multinivel ni un fondo de inversión, somos una
            academia de trading asociada al broker Libertex.
          </h3> */}
        </div>
        <WhatsAppButton />
      </div>
      <Footer />

    </div>
  );
};

export default LandingVideo;
