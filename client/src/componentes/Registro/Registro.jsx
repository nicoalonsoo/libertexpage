import React, { useState, useRef } from "react";
import axios from "axios";
import loading from "../../multimedia/load3.gif";
import logo from "../../multimedia/log.jpg";
import { eventLead } from "../../utils/pixelEvents/PixelEvents";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import "./Registro.css";
const Registro = ({ actualizarEstado, countries }) => {
  const formRef = useRef(null);
  const history = useHistory();
  const [registro, setRegistro] = useState({
    FNAME: "",
    EMAIL: "",
    PHONE: "",
    CountryCode: null,
    Country: "",
  });

  //https://script.google.com/macros/s/AKfycbxTs-CYjqMdR-g72nLBDDtKnmtbIAgDywqi8Fmbedl2Xmr43J2Lj_dakwzz4NKXvMc7gg/exec

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    FNAME: "completar con su nombre",
    EMAIL: "completar email",
    PHONE: "colocar su numero",
    countryCode: "colocar Country Code",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistro((prevRegistro) => ({
      ...prevRegistro,
      [name]: value,
    }));
    validate({ ...registro, [name]: value });
  };
  // const handleCountryChange = (e) => {
  //   const code = e.target.value;
  //   setRegistro({
  //     ...registro,
  //     countryCode: code,
  //   });
  //   validate({ ...registro, countryCode: code });
  // };

  const validate = (registro) => {
    let errors = {};
    if (!registro.FNAME) {
      errors.FNAME = "Llenar con su nombre";
    }
    if (!registro.EMAIL) {
      errors.EMAIL = "Debes ingresar un email.";
    }
    if (registro.EMAIL) {
      const emailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (!emailRegex.test(registro.EMAIL)) {
        errors.EMAIL = "El email ingresado no es válido";
      }
    }
    if (!registro.PHONE) {
      errors.PHONE = "Debe ingresar su numero de celular.";
    }
    if (!registro.countryCode) {
      errors.PHONE = "Debe ingresar el código de su pais.";
    }
    if (!registro.countryCode && !registro.PHONE) {
      errors.PHONE =
        "Debe ingresar el código de su pais y su numero de celular.";
    }
    setErrors(errors);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   validate(registro);
  //   if (Object.keys(errors).length === 0) {
  //     eventLead(registro.EMAIL, registro.FNAME);
  //     setIsLoading(true);
  //     axios
  //       .post("/users", registro)
  //       .then((res) => {
  //         // alert(`usuario enviado con éxito`);
  //         setRegistro({
  //           FNAME: "",
  //           EMAIL: "",
  //           PHONE: "",
  //         });
  //         actualizarEstado(false);
  //         history.push("/video");
  //       })
  //       .catch((err) => alert(err));
  //   } else {
  //     setFormSubmitted(true);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(registro);
    if (Object.keys(errors).length === 0) {
      setRegistro({
        FNAME: "",
        EMAIL: "",
        PHONE: "",
      });
      if (formRef.current) {
        formRef.current.submit();
      }
      Submit(e);
    } else {
      setFormSubmitted(true);
    }
  };

  const Submit = (e) => {
    const formDatab = new FormData();
    for (const key in registro) {
      formDatab.append(key, registro[key]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbxTs-CYjqMdR-g72nLBDDtKnmtbIAgDywqi8Fmbedl2Xmr43J2Lj_dakwzz4NKXvMc7gg/exec",
      {
        method: "POST",
        body: formDatab,
        mode: "no-cors",
      }
    )
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });

    const form = e.target.closest("form");
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        // Mostrar mensaje de éxito (puedes ajustar esto según tus necesidades)
        // const successResponse = document.getElementById('mce-success-response');
        // successResponse.style.display = 'block';
        // successResponse.textContent = 'Subscription successful! Thank you.';
        // setTimeout(() => {
        //   window.location.href = 'https://your-redirect-url.com';
        // }, 5000);
      })
      .catch(() => {
        // Manejo de error (puedes ajustar esto según tus necesidades)
        const errorResponse = document.getElementById("mce-error-response");
        errorResponse.style.display = "block";
        errorResponse.textContent = "Subscription failed. Please try again.";
      });

    setIsLoading(true);
    setRegistro({
      Name: "",
      Email: "",
      Phone: "",
      // CountryCode: "",
      Country: "",
    });
    actualizarEstado(false);
    history.push("/video");
    // actualizarEstado(true);
  };

  const handleClick = (click) => {
    actualizarEstado(click);
  };

  const selectedCountry = countries.find(
    (country) => country.code === registro.countryCode
  );

  return (
    <div className="max-w-[1100px] flex items-center justify-center">
      <div className="max-w-[700px] p-4 bg-white rounded-lg shadow-lg overflow-auto max-h-[700px] relative">
        <button
          className="bg-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out text-white font-semibold text-sm py-1 px-2 rounded absolute top-0 right-0 mt-2 mr-2"
          onClick={() => handleClick(false)}
          // style={{ marginLeft: "250px" }}
        >
          X
        </button>
        <div className="flex justify-center mb-2">
          <img src={logo} alt="Logo" className="w-30 h-20 p-0" />
        </div>
        <h1 className="text-lg md:text-2xl font-semibold text-center text-gray-900 mt-4 mb-2">
          INGRESA TUS DATOS PARA RECIBIR ACCESO + MATERIAL EXTRA PERSONALIZADO.
        </h1>
        <h3
          className="text-sm md:text-lg font-bold text-red-500 mb-2 mt-0 mx-4 md:my-0 text-left"
          style={{ marginBottom: "1rem" }}
        >
          *Utilizaremos estos datos para ponernos en contacto y regalarte
          material de entrenamiento extra en base tus necesidades específicas de
          trading.
        </h3>
        <h3
          className="text-sm md:text-lg font-bold text-red-500 mb-2 mt-0 mx-4 md:my-0 text-left"
          style={{ marginBottom: "1rem" }}
        >
          *SÓLO regístrate si tienes más de $100 dólares para depositar en tu
          cuenta personal de trading y estás dispuesto a crecer.
        </h3>

        <form className="max-w-[400px] sm:max-w-[700px] mx-auto">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block mb-1 sm:mb-2 text-sm text-gray-600"
            >
              Ingresá tu Primer Nombre y Apellido
            </label>
            <input
              type="text"
              id="FNAME"
              name="FNAME"
              value={registro.FNAME}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            {formSubmitted && errors.FNAME && (
              <span className="text-red-500">{errors.FNAME}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="PHONE"
              className="block mb-1 sm:mb-2 text-sm text-gray-600"
            >
              Ingresá tu Numero de telefono
            </label>
            <div className="flex">
              <Select
                options={countries.map((country) => ({
                  value: [country.code, country.name],
                  label: (
                    <div className="cursor-pointer flex items-center">
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-6 h-4"
                      />
                      <span>
                        {country.name} ({country.code})
                      </span>
                    </div>
                  ),
                }))}
                placeholder={
                  <span className="sm:text-sm text-10px leading-1.25rem text-gray-600 ">
                    Código de Area
                  </span>
                }
                value={
                  selectedCountry
                    ? {
                        value: [registro.countryCode, registro.country],
                        label: (
                          <div className="flex items-center cursor-pointer">
                            <img
                              src={selectedCountry.flag}
                              alt={selectedCountry.name}
                              className="w-6 h-4"
                            />
                            <span>
                              {`${selectedCountry.name} (${registro.countryCode})`}
                            </span>
                          </div>
                        ),
                      }
                    : registro.countryCode
                }
                onChange={(selectedOption) => {
                  setRegistro({
                    ...registro,
                    countryCode: selectedOption.value[0],
                    country: selectedOption.value[1],
                  });
                  validate({ ...registro, countryCode: selectedOption.value });
                }}
                className="w-2/3 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="text"
                id="PHONE"
                name="PHONE"
                value={registro.PHONE}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            {formSubmitted && errors.PHONE && (
              <span className="text-red-500">{errors.PHONE}</span>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block mb-1 sm:mb-2 text-sm text-gray-600"
            >
              Ingresá tu Correo electrónico
            </label>
            <input
              type="email"
              id="EMAIL"
              name="EMAIL"
              value={registro.EMAIL}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            {formSubmitted && errors.EMAIL && (
              <span className="text-red-500">{errors.EMAIL}</span>
            )}
          </div>
          <div className="flex items-center justify-center ">
            {isLoading ? (
              <img
                src={loading}
                alt="loading"
                className="max-w-[76px] max-h-[76px]"
              />
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full sm:w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
              >
                Registro
              </button>
            )}
          </div>
        </form>
        <div className="text-center"></div>
        <p className="text-xs text-gray-600 text-center mt-8">
          &copy; 2023 Libertex
        </p>
      </div>
    </div>
  );
};

export default Registro;

// className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
