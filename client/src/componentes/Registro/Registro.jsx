import React, {useState} from 'react';
import axios from 'axios'
// import { useHistory } from "react-router-dom";
const Registro = ({ actualizarEstado }) => {
  // const history = useHistory();
  const [registro, setRegistro] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
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
    if(!registro.name){
        errors.name = "Llenar con su nombre"
    };
    if(!registro.email){
      errors.email = "Debes ingresar un email."
    };
    if(registro.email){
    const  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(!emailRegex.test(registro.email)){
        errors.email = "El email ingresado no es válido"
    }};
    if(!registro.phone){
        errors.phone = "Debe ingresar su numero de celular."
    }
    setErrors(errors);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Verifica si hay errores en span antes de enviar la solicitud axios
      if (Object.keys(errors).length === 0) {
        axios
          .post('/users', registro)
          .then((res) => {
            alert(`usuario enviado con éxito`);
            setRegistro({
              name: '',
              email: '',
              phone: '',
            });
            actualizarEstado(false);
          })
          .catch((err) => alert(err));
      }
      else{
        setFormSubmitted(true);
      }
    };

  return (
    <div className="max-w-[1100px] flex items-center justify-center">
      <div className="max-w-[700px] p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center mb-8">
          <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" className="w-30 h-20" />
        </div>
      <h3 className="text-2xl mb-4">
          ...Copiando y pegando nuestro sistema que nos genera +170.000 USD /
          mes con +60% de rentabilidad luego de gastos e impuestos (a la vez que
          delegas tu empresa en un equipo que lo hace todo).
        </h3>

        <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Accede al video</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Nombre y apellido</label>
            <input type="text" id="name" name="name" value={registro.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            {formSubmitted && errors.name && <span>{errors.name}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 text-sm text-gray-600">phone</label>
            <input type="text" id="phone" name="phone" value={registro.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            {formSubmitted && errors.phone && <span>{errors.phone}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Correo electrónico</label>
            <input type="email" id="email" name="email" value={registro.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            {formSubmitted && errors.email && <span>{errors.email}</span>}
          </div>
          <button type="submit" onClick={handleSubmit} className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2">Registro</button>
        </form>
        <div className="text-center">
        </div>
        <p className="text-xs text-gray-600 text-center mt-8">&copy; 2023 nombre de la agencia</p>
      </div>
    </div>
  );
};

export default Registro;