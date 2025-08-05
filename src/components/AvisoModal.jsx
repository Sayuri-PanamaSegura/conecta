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
          <div className="bg-white/30 max-w-3xl w-full max-h-[90vh] p-6 rounded-lg shadow-xl overflow-y-auto relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-4 text-gray-500 hover:text-black text-2xl font-bold"
              aria-label="Cerrar"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Aviso de Privacidad</h2>
            <div className="text-sm text-gray-800 space-y-4 whitespace-pre-wrap">
{`Conecta Soluciones Tecnológicas S.C (en adelante “CONECTA”), señalando para efectos del presente Aviso de Privacidad (en lo sucesivo el “Aviso”) el domicilio ubicado en Av. Baja California 274, Piso 2, Int 214 Hipódromo Condesa, C.P. 06100, Cuauhtémoc, CDMX., es el responsable de salvaguardar la integridad, privacidad y protección de los datos personales que nos proporcione (en adelante el “Titular”), los cuales serán protegidos conforme a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en adelante la “Ley”), y demás normatividad que resulte aplicable, por lo que se le solicita leer cuidadosamente el presente Aviso de Privacidad.

Para CONECTA resulta necesaria la recopilación de ciertos datos personales para llevar a cabo las actividades intrínsecas a su objeto social. CONECTA tiene la obligación legal y social de cumplir con las medidas legales y de seguridad suficientes para proteger aquellos datos personales, en su caso, que haya recabado para las finalidades que a continuación serán descritas en el presente Aviso.

Más adelante describimos qué información recabamos de usted, para qué fines utilizamos dicha información, con quien la compartimos y cuáles son sus opciones para ejercer sus derechos ARCO. Al momento de proporcionar sus datos personales, Usted otorga su consentimiento para la obtención y uso de su información bajo los términos que se describen en el presente Aviso.

Todo lo anterior se realiza con el objetivo de que usted tenga pleno control y decisión sobre sus datos personales. Por ello, le recomendamos que lea atentamente la siguiente información.

Si el Titular proporciona sus datos personales significa que ha leído, entendido y aceptando los términos del presente Aviso.

¿Qué datos personales solicitamos y para qué fines?
Esta política tiene como objetivo asegurar la privacidad de los datos proporcionados por nuestros clientes, con el fin de vincularse con los servicios proporcionados por CONECTA.

Al usar los servicios o accesos a este sitio o cualquier sitio relacionado o brindado por CONECTA, usted está de acuerdo con la recopilación, uso, transferencia y almacenamiento de su información personal, lo que significa que ha leído, entendido y aceptado los términos a continuación expuestos. En caso de no estar de acuerdo con ellos, el titular NO deberá proporcionar ninguna información personal.

Datos personales que podrá ser recabada con pleno conocimiento del Titular:
La categoría de datos personales que podrán ser recabados y sujetos a tratamiento por CONECTA son:
I. Datos de identificación: nombre completo, nombre de empresa, puesto que desempeña en su empresa.
II. Datos de contacto: teléfono, dirección, correo electrónico.
III. Datos fiscales: constancia de situación fiscal, RFC.

Finalidades del tratamiento de Datos.
CONECTA, quien funge como persona moral responsable de datos personales, podrá recabar la siguiente información para procesos administrativos y/o de operación.
a. Para prestar el servicio: CONECTA utilizará sus datos personales con el fin de contar con una base de datos de clientes, así como, como para la prestación de los servicios desde la oferta de bienes y/o servicios, atención al cliente hasta la conclusión de la venta.
b. Para enviarle información promocional y eventos: CONECTA podrá enviarles información relativa a servicios, eventos, entre otros.
c. Para mejorar la calidad del servicio: CONECTA podrá utilizar sus datos de contacto, para enviarle encuestas de satisfacción derivadas de la calidad del servicio que presta CONECTA.
d. Envío de cotizaciones solicitadas por el titular de los datos: CONECTA podrá elaborar y enviar cotizaciones correspondientes a los servicios o productos solicitados.

Limitación de Uso y Divulgación.
El tratamiento de sus datos personales será el que resulte necesario, adecuado y relevante con las finalidades previstas en este Aviso de Privacidad.

CONECTA cumple con los principios de protección de datos personales establecidos en la Ley Federal de Protección de Datos Personales en Posesión de Particulares y adopta las medidas necesarias para su aplicación. Lo anterior aplica aún y cuando estos datos fueren tratados por un tercero, y con el fin de cubrir el servicio prestado, manteniendo la confidencialidad en todo momento. CONECTA toma las medidas necesarias y suficientes para procurar que esta Política de Privacidad sea respetada, por él o por terceros con los que guarde relación alguna.

Medios para ejercer los Derechos de Acceso, Rectificación, Cancelación u Oposición.
Cualquier Titular o, en su caso, representante legal podrá ejercer cualquiera de los derechos de acceso, rectificación, cancelación u oposición (en lo sucesivo “Derechos ARCO”), así como revocar su consentimiento para el tratamiento de sus datos personales únicamente realizando la petición de revocación, misma que deberá ser acompañada de los documentos que acrediten la identidad del titular (identificación oficial vigente con fotografía) o, en su caso, la representación legal del titular en términos de la legislación común, y presentarlo a través del correo:
contacto@conecta.mx

La revocación del consentimiento puede efectuarse en cualquier momento, sin que se atribuyan efectos retroactivos. Para iniciar el proceso de revocación, deberá indicar de forma precisa el consentimiento que desea revocar al correo electrónico contacto@conecta.mx.

La solicitud de accesos, rectificación, cancelación u oposición deberá contener y acompañar lo siguiente:
I. El nombre del titular y domicilio u otro medio para comunicarle la respuesta a su solicitud;
II. Los documentos que acrediten la identidad o, en su caso, la representación legal del titular;
III. La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos antes mencionados, y
IV. Cualquier otro elemento o documento que facilite la localización de los datos personales,
V. Para el caso de las solicitudes de rectificación el Titular deberá indicar las modificaciones a realizarse y aportar la documentación que sustente su petición.

CONECTA comunicará al Titular en un plazo no mayor a 20 (veinte) días hábiles contados a partir de la recepción de la solicitud, la determinación adoptada a efecto de que, si resulta procedente, se haga efectiva la misma dentro de los 15 (quince) días siguientes a la fecha en que se comunica la respuesta.

Los plazos, antes referidos, podrán ser ampliados una sola vez por un periodo igual, siempre y cuando así lo justifiquen las circunstancias del caso.

La obligación de acceso a la información se dará por cumplida cuando se pongan a disposición del titular los datos personales; o bien, mediante la expedición de copias simples, documentos electrónicos o cualquier otro medio que CONECTA provea al Titular.

En caso de que la información proporcionada en la solicitud sea errónea o insuficiente, o bien, no se acompañen los documentos de acreditación correspondientes, se podrá requerirle al solicitante para que dentro del término de 5 (cinco) días hábiles siguientes a la notificación, aporte los elementos o documentos necesarios para que CONECTA pueda dar cumplimiento a la solicitud correspondiente. De no dar respuesta en dicho plazo, se tendrá por no presentada la solicitud.

CONECTA podrá negar el acceso a los datos personales, la rectificación, cancelación o concesión de la oposición al tratamiento de los mismos, en los siguientes supuestos:
i. Cuando el solicitante no sea el titular de los datos personales, o el representante legal no esté debidamente acreditado para ello;
ii. Cuando en su base de datos no se encuentren los datos personales del solicitante;
iii. Cuando se lesionen los derechos de un tercero;
iv. Cuando exista un impedimento legal, o la resolución de una autoridad competente que restrinja el acceso a los datos personales o que no permita la rectificación, cancelación u oposición de los mismos;
v. Cuando la rectificación, cancelación u oposición haya sido previamente realizada.

CONECTA limitará el uso de los datos personales a petición expresa del titular, y no estará obligada a cancelar los datos cuando:
I. Se refiera a las partes de un contrato privado, social o administrativo y sean necesarios para su desarrollo y cumplimiento;
II. Deban ser tratados por disposición legal;
III. Obstaculice actuaciones judiciales o administrativas vinculadas a obligaciones fiscales, la investigación y persecución de delitos o la actualización de sanciones administrativas;
IV. Sean necesarios para proteger los intereses jurídicamente tutelados del titular;
V. Sean necesarios para realizar una acción en función del interés público;
VI. Sean necesarios para cumplir con una obligación legalmente adquirida por el titular.

Los datos de contacto para el tratamiento de datos personales, encargado de darle trámite a las solicitudes de derechos ARCO, son los siguientes:
Domicilio: Av. Baja California 274, Piso 2, Int 214 Hipódromo Condesa, C.P. 06100, Cuauhtémoc, CDMX.
Correo electrónico: contacto@conecta.mx

Transferencia de Datos Personales.
CONECTA podrá transferir sus datos personales a terceros mexicanos o extranjeros de conformidad con el artículo 37 de la Ley de la materia, esta sin necesidad de contar con consentimiento expreso del Titular.

Si se llegase a cumplir alguno de dichos supuestos contemplados, le informamos que CONECTA adoptará las medidas necesarias para que las personas que tengan acceso a sus datos personales cumplan con la política de privacidad de CONECTA, así como con los principios de protección de datos personales establecidos en la Ley.

Se hace de su conocimiento que con la finalidad de impedir el acceso y revelación no autorizada y de mantener la exactitud de los datos personales que sean proporcionados y garantizar la utilización correcta de la información, CONECTA cuenta con los procedimientos físicos, tecnológicos y administrativos apropiados para proteger la información que recaba.

Modificaciones al Aviso de Privacidad.
CONECTA se reserva el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso, mismo que se informará a través de la página del sitio web de CONECTA www.conecta.com

Si el Titular proporciona sus datos personales significa que ha leído, entendido y aceptado los términos expuestos.

Asimismo, le recordamos que nuestros avisos de privacidad se encuentran disponibles en la página web anteriormente señalada.

Fecha de Actualización 23/08/2023`}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
