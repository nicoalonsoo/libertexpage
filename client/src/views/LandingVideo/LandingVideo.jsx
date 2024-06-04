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
          className="text-gray-900 text-balance font-podium font-medium text-2xl lg:text-5xl mx-2 my-4 md:my-0"
          style={{ marginBottom: "1rem" }}
        >
          Experto en trading algorítmico
          <span className="underline text-[#ff6634]"> revela</span> el sistema
          que utiliza para&nbsp;
          <span className="underline text-[#ff6634]">vivir del trading</span>
        </h3>
        <h1 className="text-[#ff6634] font-montserrat-600 text-3xl md:text-5xl font-bold">
          PASO 1: MIRA EL VIDEO
        </h1>
        <div className="mx-auto max-w-[700px] mb-4 mt-4">
          <DropboxVideo />
        </div>
        <h1 className="text-[#ff6634] font-montserrat-600 text-2xl md:text-5xl font-bold mb-4 uppercase text-balance">
          PASO 2: solicita tu cupo gratuito a Inverza Academy
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
        </div>
        <WhatsAppButton />
      </div>
      <Footer />
    </div>
  );
};

export default LandingVideo;
