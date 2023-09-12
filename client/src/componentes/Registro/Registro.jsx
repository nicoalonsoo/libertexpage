import React, { useState } from "react";
import axios from "axios";
import loading from "../../multimedia/load3.gif";
import logo from "../../multimedia/log.jpg";
import { eventLead } from "../../utils/pixelEvents/PixelEvents";
import { useHistory } from "react-router-dom";
const Registro = ({ actualizarEstado }) => {
  const history = useHistory();
  const [registro, setRegistro] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "completar con su nombre",
    email: "completar email",
    phone: "colocar su numero",
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

  const validate = (registro) => {
    let errors = {};
    if (!registro.name) {
      errors.name = "Llenar con su nombre";
    }
    if (!registro.email) {
      errors.email = "Debes ingresar un email.";
    }
    if (registro.email) {
      const emailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (!emailRegex.test(registro.email)) {
        errors.email = "El email ingresado no es válido";
      }
    }
    if (!registro.phone) {
      errors.phone = "Debe ingresar su numero de celular.";
    }
    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(registro);
    // Verifica si hay errores en span antes de enviar la solicitud axios
    if (Object.keys(errors).length === 0) {
      eventLead(registro.email, registro.name);
      setIsLoading(true);
      axios
        .post("/users", registro)
        .then((res) => {
          // alert(`usuario enviado con éxito`);
          setRegistro({
            name: "",
            email: "",
            phone: "",
          });
          actualizarEstado(false);
          history.push("/video");
        })
        .catch((err) => alert(err));
    } else {
      setFormSubmitted(true);
    }
  };

  const handleClick = (click) => {
    actualizarEstado(click);
  };
  return (
    <div className="max-w-[1100px] flex items-center justify-center">
      <div className="max-w-[700px] p-6 bg-white rounded-lg shadow-lg">
        <button
          className="bg-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out text-white font-semibold text-sm py-1 px-2 rounded"
          onClick={() => handleClick(false)}
          style={{ marginLeft: '500px'}}
        >
          X
        </button>
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Logo" className="w-30 h-20" />
        </div>
        <h3 className="text-2xl mb-4">
          ...Copiando y pegando nuestro sistema que nos genera +170.000 USD /
          mes con +60% de rentabilidad luego de gastos e impuestos (a la vez que
          delegas tu empresa en un equipo que lo hace todo).
        </h3>

        <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
          Accede al video
        </h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm text-gray-600">
              Nombre y apellido
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={registro.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            {formSubmitted && errors.name && <span>{errors.name}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 text-sm text-gray-600">
              phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={registro.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            {formSubmitted && errors.phone && <span>{errors.phone}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={registro.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            {formSubmitted && errors.email && <span>{errors.email}</span>}
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
                className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
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
