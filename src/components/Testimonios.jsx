// src/components/Testimonios.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonios = [
  {
    nombre: "María González",
    empresa: "CriptoPagos",
    mensaje: "Gracias a Conecta Cripto mejoramos nuestro cumplimiento en 3 semanas.",
  },
  {
    nombre: "Luis Romero",
    empresa: "FintechNova",
    mensaje: "La solución fue clave para operar sin riesgos regulatorios.",
  },
  {
    nombre: "Ana Torres",
    empresa: "ChainSecure",
    mensaje: "Nos ayudaron a escalar sin perder seguridad. Excelente equipo.",
  },
];

export default function Testimonios() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonios</h2>
        <p className="text-gray-600">Lo que nuestros clientes dicen sobre nosotros</p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="max-w-3xl mx-auto"
      >
        {testimonios.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-xl shadow text-left">
              <p className="text-lg text-gray-700 italic mb-4">“{t.mensaje}”</p>
              <div className="text-sm text-gray-600 font-medium">
                — {t.nombre}, {t.empresa}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
