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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-3xl w-full max-h-[90vh] p-6 rounded-lg shadow-xl overflow-y-auto relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-4 text-gray-500 hover:text-black text-2xl font-bold"
              aria-label="Cerrar"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Aviso de Privacidad</h2>
            <div className="text-sm text-gray-800 space-y-4">
              <p><strong>Conecta Soluciones Tecnológicas S.C</strong> (en adelante “CONECTA”), señalando...</p>

              <p>Para CONECTA resulta necesaria la recopilación de ciertos datos personales...</p>

              <p><strong>¿Qué datos personales solicitamos y para qué fines?</strong></p>

              <p>Esta política tiene como objetivo asegurar la privacidad de los datos proporcionados...</p>

              <p><strong>Finalidades del tratamiento de Datos.</strong></p>

              <ul className="list-disc list-inside">
                <li>Para prestar el servicio...</li>
                <li>Para enviarle información promocional...</li>
                <li>Para mejorar la calidad del servicio...</li>
                <li>Envío de cotizaciones...</li>
              </ul>

              <p><strong>Limitación de Uso y Divulgación.</strong></p>
              <p>El tratamiento de sus datos personales será el que resulte necesario...</p>

              <p><strong>Medios para ejercer los Derechos ARCO</strong></p>
              <p>Cualquier Titular podrá ejercer sus derechos mediante solicitud a: <a className="underline text-purple-700" href="mailto:contacto@conecta.mx">contacto@conecta.mx</a></p>

              <p>Los datos de contacto para ejercer sus derechos son:<br />
              Domicilio: Av. Baja California 274, Piso 2, Int 214, CDMX<br />
              Correo: <a className="underline text-purple-700" href="mailto:contacto@conecta.mx">contacto@conecta.mx</a></p>

              <p><strong>Transferencia de Datos Personales</strong></p>
              <p>CONECTA podrá transferir sus datos personales a terceros...</p>

              <p><strong>Modificaciones al Aviso de Privacidad</strong></p>
              <p>CONECTA se reserva el derecho de modificar el presente aviso...</p>

              <p className="text-xs text-gray-500">Fecha de Actualización: 23/08/2023</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
