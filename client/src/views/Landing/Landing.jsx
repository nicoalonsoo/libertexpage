import React, { useState, useEffect } from "react";
import gif from "../../multimedia/gif.gif";
import "./Landing.css";
import Registro from "../../componentes/Registro/Registro";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
const Landing = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const [showForm, setShowform] = useState(false);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleImageHover = (e) => {
    e.target.classList.toggle("hovered-image");
    e.target.style.cursor = "pointer";
  };

  const handleClick = (click) => {
    setShowform(click);
  };

  const actualizarEstadoPadre = (estado) => {
    setShowform(estado);
  };
  const modifiedCountries = countries.filter(
    (country) =>
      country.continent === "South America" ||
      country.continent === "North America"
  );

  const filteredCountryNames = [
    "British Virgin Islands",
    "Canada",
    "Venezuela",
    "Cayman Islands",
    "Caribbean Netherlands",
    "Saint Vincent and the Grenadines",
    "United States Virgin Islands",
    "United States",
    "French Guiana",
    "Turks and Caicos Islands",
    "Brazil",
    "Falkland Islands",
    "Sint Maarten",
    "Belize",
    "Montserrat",
    "Suriname",
    "Greenland",
    "Jamaica",
    "Guyana",
    "Saint Barthélemy",
    "Saint Pierre and Miquelon",
    "Martinique",
    "Guadeloupe",
    "Saint Kitts and Nevis",
    "Saint Martin",
    "Anguilla",
    "Saint Lucia",
    "Curaçao",
    "Dominican Republic",
    "Trinidad and Tobago",
    "Antigua and Barbuda",
  ];

  const filterCountries = modifiedCountries.filter(
    (country) => !filteredCountryNames.includes(country.name)
  );
  console.log(filterCountries);
  return (
    <div>
      <Header />
      <div className="text-center py-4 max-w-[1223px] mx-auto">
        <h3 className="text-sm lg:text-lg px-2 lg:px-64 font-bold text-red-500 ">
          🚨 SOLO PARA PERSONAS QUE SE ESTÁN INICIANDO EN EL TRADING O QUE YA SE
          INICIARON PERO NO TIENEN BUENOS RESULTADOS. 🚨
        </h3>
        <h3 className="italic text-sm md:text-xl px-2 my-2 md:my-0 md:mx-0">
          Nuevo video de 5 minutos revela...
        </h3>
        <h1 className="text-bnalance font-podium font-medium text-3xl lg:text-8xl text-gray-900 mb-2 px-2 lg:px-0 md:mx-0">
          COMO LOGRAR OBTENER UNA RENTABILIDAD DEL{" "}
          <span className="underline text-[#ffa323]">10%</span> AL{" "}
          <span className="underline text-[#ffa323]">30%</span> MENSUAL HACIENDO
          COPYTRADING DE LA MANO DE UN{" "}
          <span className="underline text-[#ffa323]">EXPERTO</span>
        </h1>
        <h3 className="text-sm lg:text-xl mb-2  my-2 md:my-0 md:mx-0 px-2 lg:px-32 italic">
          Copiando y pegando nuestra estrategia que nos viene generando en
          promedio un 29% mensual en los últimos dos años. Vas a poder ingresar
          100% GRATIS cumpliendo dos requisitos.
        </h3>
        <div className="mx-auto max-w-[700px] p-2 sm:p-4 mb-2 mt-2">
          <img
            src={gif}
            alt="gif"
            className="mr-2 sm:mr-0 transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110 "
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageHover}
            onClick={() => handleClick(true)}
          />
        </div>
        <button
          className="ov-btn-slide-left max-w-[700px] text-white text-2xl py-4 px-6 rounded-lg mb-4 mx-2 my-2 md:my-2"
          onClick={() => handleClick(true)}
          style={{ marginBottom: "3rem" }}
        >
          QUIERO VER ESTE BREVE VIDEO
          <p className="text-12px sm:text-0.875rem leading-1.25rem">
            (SOLO PARA PERSONAS QUE SE ESTÁN INICIANDO EN EL TRADING O QUE YA SE
            INICIARON PERO NO TIENEN BUENOS RESULTADOS.)
          </p>
        </button>
        <div className="flex flex-col justify-start items-center border-[2px] border-red-500 mx-2 space-y-4 py-4">
          <h3 className="text-sm md:text-lg font-bold text-red-500 mx-2 text-left">
            *Si no tienes mínimo $100 dólares para depositar en tu cuenta de
            trading no te registres porque esto no va funcionar para ti.
          </h3>
          <h3 className="text-sm md:text-lg font-bold text-red-500 mx-2 text-left">
            *No somos una empresa multinivel, ni un fondo de inversión. Somos
            una academia de trading partner oficial del broker Libertex.
          </h3>
        </div>
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
                countries={filterCountries}
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
