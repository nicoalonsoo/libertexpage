import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Unsubscribe = () => {
  const location = useLocation(); // Obtén la ubicación actual, que incluye la URL
  const queryParams = new URLSearchParams(location.search); // Parsea los parámetros de consulta de la URL
  const emailFromQuery = queryParams.get('email'); // Obtiene el valor del parámetro 'email' de la URL
  const [email, setEmail] = useState(emailFromQuery || ''); // Estado para el email del usuario
  const [newStatus, setNewStatus] = useState('Desactivado'); // Estado para el nuevo estado (status) del usuario

  const handleStatusChange = () => {
    // Aquí realizarás la solicitud PUT a tu servidor
    axios
      .put(`/users?email=${email}`, { status: newStatus }) // Reemplaza '/api/users' con la ruta de tu API
      .then((response) => {
        console.log('Unsubscribe', response.data);
        // Realiza acciones adicionales si es necesario
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud PUT', error);
        // Maneja errores si es necesario
      });
  };

  useEffect(() => {
    handleStatusChange()
  }, []);
  return (
    <div>
      <h1>You have been unsubscribed</h1>
    </div>
  )
}

export default Unsubscribe;
