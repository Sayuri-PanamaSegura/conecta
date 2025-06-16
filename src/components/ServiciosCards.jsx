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
    nombre: "Hermes",
    descripcion: "Implementación simple y segura de sistemas y plataformas de pago.",
    imagen: "/servicios/hermes1.png",
    logo: "/servicios/hermes.png",
    enlace: "/unidades/hermes",
  },
  {
    nombre: "Google Cloud Partner",
    descripcion: "Asesoría experta, workspace, integración y seguridad en la nube.",
    imagen: "/servicios/google1.png",
    logo: "/servicios/google1.png",
    enlace: "/unidades/google-cloud",
  },
];

const colores = ['#800080','#2836EF', '#4688F1'];

export default function ServiciosCards() {
  const [activo, setActivo] = useState(null);

  return (
    <>
      {/* Texto guía solo visible en móvil */}
      <p className="text-center text-sm text-gray-500 mb-4 md:hidden">
        Toca una tarjeta para ver más información
      </p>

      <div className="grid md:grid-cols-4 gap-10 items-center">
        {/* Imagen grande a la izquierda (solo escritorio) */}
        <div className="hidden md:flex justify-center items-center md:col-span-1">
          {activo !== null && (
            <img
              src={servicios[activo].logo}
              alt={`Logo de ${servicios[activo].nombre}`}
             className="w-48 h-auto object-contain transition-all duration-500"

            />
          )}
        </div>

        {/* Tarjetas */}
        <div className="md:col-span-3 flex flex-col space-y-4">
          {servicios.map((servicio, i) => {
            const estaActivo = activo === i;
            const color = colores[i];

            return (
              <a
                key={servicio.nombre}
                href={`${servicio.enlace}#from-servicios`}
                onClick={() => setActivo(i)}
                onMouseEnter={() => setActivo(i)}
                onMouseLeave={() => setActivo(null)}
                className={`flex items-center p-6 rounded-lg transition group cursor-pointer ${
                  estaActivo ? 'border-l-4' : 'bg-gray-100'
                } group-active:scale-[0.98] group-active:shadow-sm`}
                style={{
                  borderColor: estaActivo ? color : '#ccc',
                  backgroundColor: estaActivo ? `${color}22` : '#f3f4f6',
                }}
              >
                <div
                  className="flex-1 border-l-4 pl-3 transition-all"
                  style={{
                    borderColor: estaActivo ? color : '#ccc',
                    backgroundColor: 'transparent',
                  }}
                >
                  <h3
                    className="text-base font-semibold transition-colors duration-200"
                    style={{ color: estaActivo ? color : '#374151' }}
                  >
                    {servicio.nombre}
                  </h3>
                  <p
                    className="text-sm transition-colors duration-200"
                    style={{ color: estaActivo ? '#000' : '#6B7280' }}
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

      {/* Logo del servicio activo en móvil */}
      {activo !== null && (
        <div className="md:hidden flex justify-center mt-6">
          <img
            src={servicios[activo].logo}
            alt={`Logo de ${servicios[activo].nombre}`}
            className="w-32 h-auto object-contain transition-all duration-500"
          />
        </div>
      )}
    </>
  );
}
