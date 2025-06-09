// src/components/ServiciosCards.jsx
import { useState } from "react";

const servicios = [
  {
    nombre: "Conecta Cripto",
    descripcion: "Cifrado robusto y HSMs con soluciones líderes.",
    imagen: "/servicios/conecta1.png",
    logo: "/servicios/conecta.png",
    enlace: "/unidades/conecta-cripto",
  },
  {
    nombre: "Tesseract",
    descripcion: "Ciberseguridad y autenticación avanzadas.",
    imagen: "/servicios/tesseract1.png",
    logo: "/servicios/tesseract.png",
    enlace: "/unidades/tesseract",
  },
  {
    nombre: "Hermes",
    descripcion: "Implementación simple y segura de sistemas y plataformas de pago.",
    imagen: "/servicios/hermes1.png",
    logo: "/servicios/hermes.png",
    enlace: "/unidades/hermes",
  },
  {
    nombre: "Google Cloud Partner",
    descripcion: "Asesoría experta, workspace, integración y seguridad en la nube.",
    imagen: "/servicios/google.png",
    logo: "/servicios/google.png",
    enlace: "/unidades/google-cloud",
  },
];

const colores = ['#800080', '#54E34E', '#2836EF', '#4688F1'];

export default function ServiciosCards() {
  const [activo, setActivo] = useState(null);

 return (
  <div className="grid md:grid-cols-3 gap-10 items-center">
  {/* Imagen grande a la izquierda, centrada */}
  <div className="hidden md:flex justify-center items-center">
    {activo !== null && (
      <img
        src={servicios[activo].logo}
        alt={`Logo de ${servicios[activo].nombre}`}
        className="w-64 h-auto object-contain transition-all duration-500"
      />
    )}
  </div>

  {/* Tarjetas más pequeñas y comprimidas a la derecha */}
  <div className="md:col-span-2 flex flex-col space-y-4">
    {servicios.map((servicio, i) => {
      const estaActivo = activo === i;
      const color = colores[i];

      return (
        <a
          key={servicio.nombre}
          href={`${servicio.enlace}#from-servicios`}
          onMouseEnter={() => setActivo(i)}
          onMouseLeave={() => setActivo(null)}
          className={`flex items-center p-6 rounded-lg transition group ${
            estaActivo ? '' : 'bg-gray-100'
          }`}
        >
          <div
            className="flex-1 border-l-4 pl-3"
            style={{ borderColor: estaActivo ? color : '#ccc' }}
          >
            <h3
              className={`text-base font-semibold transition-colors ${
                estaActivo ? 'text-[var(--color)]' : 'text-gray-700'
              }`}
              style={{ '--color': color }}
            >
              {servicio.nombre}
            </h3>
            <p
              className={`text-sm transition-colors ${
                estaActivo ? 'text-black' : 'text-gray-500'
              }`}
            >
              {servicio.descripcion}
            </p>
          </div>

          <div className="ml-4 bg-white rounded-xl p-3 shadow-md text-2xl group-hover:scale-110 transition">
            <img
              src={servicio.imagen}
              alt={servicio.nombre}
              className="w-6 h-6 object-contain"
            />
          </div>
        </a>
      );
    })}
  </div>
</div>
);
}
