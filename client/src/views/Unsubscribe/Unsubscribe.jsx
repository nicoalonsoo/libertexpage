import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Unsubscribe = () => {
  const location = useLocation(); // Obtén la ubicación actual, que incluye la URL
  const queryParams = new URLSearchParams(location.search); // Parsea los parámetros de consulta de la URL
  const emailFromQuery = queryParams.get('email'); // Obtiene el valor del parámetro 'email' de la URL
  const [newStatus, setNewStatus] = useState('Desactivado'); // Estado para el nuevo estado (status) del usuario

  const handleStatusChange = async () => {
    // Aquí realizarás la solicitud PUT a tu servidor
    try {
      // Realiza la solicitud PUT al servidor
      const response = await axios.put(`/users?email=${emailFromQuery}`, { status: newStatus });
      console.log('Unsubscribe', response.data);
      // Realiza acciones adicionales si es necesario
    } catch (error) {
      console.error('Error al realizar la solicitud PUT', error);
      // Maneja errores si es necesario y proporciona retroalimentación al usuario
    }
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
