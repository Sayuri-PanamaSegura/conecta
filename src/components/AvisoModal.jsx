import { useState } from "react";

export default function AvisoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="underline text-sm hover:text-white"
      >
        Aviso de Privacidad
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white max-w-lg p-6 rounded-lg shadow-xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Aviso de Privacidad</h2>
            <p className="text-sm text-gray-700 mb-4">
              Este aviso describe cómo recopilamos y usamos tus datos. Usamos
              esta información solo para brindar nuestros servicios, y puedes
              contactarnos si deseas modificar o eliminar tus datos.
            </p>
            <p className="text-xs text-gray-500">
              Última actualización: Mayo 2025
            </p>
          </div>
        </div>
      )}
    </>
  );
}
