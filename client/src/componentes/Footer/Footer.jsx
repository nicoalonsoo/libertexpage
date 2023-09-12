import React from 'react';
// import { SocialIcon } from 'react-social-icons/component'
// import 'react-social-icons/instagram'
// import 'react-social-icons/linkedin'
// import 'react-social-icons/facebook'
import logo from '../../multimedia/log.jpg'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Logo de la empresa */}
        <img
          src={logo}
          alt="Logo de la empresa"
          className="mx-auto mb-4"
          style={{ maxWidth: '150px' }} // Ajusta el tamaño según tus necesidades
        />

        {/* Enlaces a redes sociales y correo */}
        {/* <div className="mb-4">
          <a href="https://www.instagram.com/tu_instagram" className="text-white mr-4 hover:text-blue-500">
          <SocialIcon url="www.instagram.com" />
          </a>
          <a href="https://www.linkedin.com/in/tu_linkedin" className="text-white mr-4 hover:text-blue-500">
          <SocialIcon url="www.linkedin.com" />
          </a>
          <a href="mailto:tucorreo@gmail.com" className="text-white hover:text-blue-500">
          <SocialIcon url="www.facebook.com" />
          </a>
        </div> */}

        {/* Texto de derechos reservados */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Libertex. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;