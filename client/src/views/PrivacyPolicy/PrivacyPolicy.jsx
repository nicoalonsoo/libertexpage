import React from 'react'
import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div className='px-2 lg:px-32 flex flex-col items-center justify-center py-20'>
        <h1 className="w-full text-left text-[#ff6634] font-montserrat-600 text-3xl md:text-5xl font-bold">
          Políticas de Privacidad
        </h1>
        <div className="text-left mt-8 font-montserrat-400 text-lg text-gray-700">
          <p>Nos comprometemos a proteger tu privacidad y a manejar tus datos de manera transparente y segura. Toda la información personal que recolectamos se utiliza exclusivamente para brindarte los mejores servicios y ofertas personalizadas.</p>
          
          <h2 className="mt-6 text-2xl font-bold">¿Qué datos recopilamos?</h2>
          <p>Recopilamos información como tu nombre, dirección de correo electrónico, número de teléfono y cualquier otra información que nos proporciones voluntariamente cuando interactúas con nuestros anuncios, te registras en nuestras ofertas o nos contactas.</p>
          
          <h2 className="mt-6 text-2xl font-bold">¿Cómo utilizamos tu información?</h2>
          <p>Tu información se utiliza para:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Enviarte acceso a nuestras ofertas y contenidos exclusivos.</li>
            <li>Mejorar nuestros servicios y personalizar tu experiencia.</li>
            <li>Mantenerte informado sobre novedades, promociones y eventos relevantes.</li>
          </ul>
          
          <h2 className="mt-6 text-2xl font-bold">Compartición de datos</h2>
          <p>No vendemos ni compartimos tu información personal con terceros para fines comerciales. Sin embargo, podemos compartir tus datos con proveedores de servicios de confianza que nos ayudan a operar y mejorar nuestros servicios, siempre bajo estrictas condiciones de confidencialidad.</p>
          
          <h2 className="mt-6 text-2xl font-bold">Seguridad de tus datos</h2>
          <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra el acceso no autorizado, la pérdida o la alteración.</p>
          
          <h2 className="mt-6 text-2xl font-bold">Tus derechos</h2>
          <p>Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento. Si deseas ejercer estos derechos o tienes alguna pregunta sobre nuestra política de privacidad, puedes contactarnos a través de [tu correo electrónico de contacto] o visitar nuestra página web.</p>
          
          <h2 className="mt-6 text-2xl font-bold">Actualizaciones de la política de privacidad</h2>
          <p>Podemos actualizar esta política de privacidad de vez en cuando. Cualquier cambio será comunicado a través de nuestros canales oficiales y estará disponible en nuestro sitio web.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
