const fs = require("fs");
const path = require("path");

const grado = async (data, jsonData) => {
  const filePath = path.resolve(__dirname, "../resource", "grados.json");
  let grado = `*Para el Grado de Tecnólogo*\n- Fotocopia de Documento de Identidad\n- Fotocopia del Acta de Sustentación del Proyecto de Grado\n- Fotocopia del Diploma de Bachiller\n- Resultados del exámen ECAES-SABER T&T.\n- Fotocopia de la consignación o certificación PSE por concepto de Derechos de Grado(Instructivo del Módulo de Derechos Pecuniarios: ${data} ), código 50 en la cuenta del Banco de Occidente No 230-81461.8.\n\n*Para el Grado de Tecnólogo*\n- Fotocopia de Documento de Identidad\n- Fotocopia del Acta de Sustentación del Proyecto de Grado\n- Fotocopia del Diploma de Tecnólogo\n-Resultados del exámen ECAES-SABER PRO.\n- Fotocopia de la consignación o certificación PSE por concepto de Derechos de Grado (Instructivo del Módulo de Derechos Pecuniarios: ${data} ), código 50 en la cuenta del Banco de Occidente No 230-81461.8.\n\n\n*Para el Grado de Programas de Posgrado*\n- Fotocopia de Documento de Identidad\n- Fotocopia del Acta de Sustentación del Proyecto de Grado\n- Fotocopia del Diploma de Pregrado\n- Fotocopia de la consignación o certificación PSE por concepto de Derechos de Grado (Instructivo del Módulo de Derechos Pecuniarios: ${data} ), código 50 en la cuenta del Banco de Occidente No 230-81461.8. \n\n En el siguiente enlace podra realizar la subida de documentos: https://forms.office.com/r/MYxfyJKKuT?origin=QRCode`;

  // Modificar el valor de la clave "Fechas"
  jsonData.Opcion[0].Documentos = grado.trim();

  // Convertir el JSON de nuevo a string
  const updatedJsonData = JSON.stringify(jsonData, null, 2);

  // Guardar el JSON actualizado en un nuevo archivo o sobrescribir el existente
  fs.writeFile(filePath, updatedJsonData, "utf8", (err) => {
    if (err) {
      console.error("Error escribiendo el archivo:", err);
      return;
    }
    console.log("Archivo JSON actualizado guardado como data_updated.json");
  });
};

const duplicado = async (data, jsonData) => {
  const filePath = path.resolve(__dirname, "../resource", "duplicados.json");
  let duplicados = [
    `1. Realizar el pago pecuniario correspondiente al concepto de Duplicado de Diplomas, código: 51, cuenta de ahorros: 230-81461-8. El respectivo pago se podrá realizar a través de las sucursales del banco de Occidente o por medio de Pagos Seguros en Línea (PSE) a través del Sistema de gestión Académica. (Instructivo de Costos de Derechos Pecuniarios: ${data} )\n\n 2. Una vez realizado el pago, se deberá realizar la solicitud vía correo electrónico (sec-tecnologica@udistrital.edu.co), adjuntando los siguientes documentos en formato PDF:\n- Oficio firmado solicitando el duplicado del diploma, notificando la razón de la misma.\n- Copia de la cédula de ciudadanía\n- Pago de los derechos pecuniarios por concepto de Duplicado de diplomas.\n- Escanner del diploma del cual se solicita duplicado, si es posible, de lo contrario, no es necesario.\n- Denuncio de pérdida del diploma, en caso de que lo haya perdido.\n\n 3. El duplicado del diploma se emite únicamente en formato físico y el trámite se tarda alrededor de tres (3) meses desde el momento de recibida la documentación completa al correo de la Secretaría Académica de la Facultad tecnológica.\n\n 4.Una vez se encuentre listo el diploma se le informará por correo electrónico, no se responden solicitudes a nombre de terceros., deberá ser recogido en la oficina de la Secretaría Académica de la Facultad tecnológica de lunes a viernes de 9:30 a.m. a 12:30 p.m. y 2:00 p.m. a 4:30 p.m.\n\n En el siguiente enlace podrá encontrar la información más detallada: https://ftecnologica.udistrital.edu.co/node/596`,
    `1. Realizar el pago pecuniario correspondiente al concepto de Copias de Actas de Grado, código: 49, cuenta de ahorros: 230-81461-8 El respectivo pago se podrá realizar a través de las sucursales del banco de Occidente o por medio de Pagos Seguros en Línea (PSE) a través del Sistema de gestión Académica. (Instructivo de Costos de Derechos Pecuniarios: ${data} )\n\n2.Una vez realizado el pago, se deberá realizar la solicitud vía correo electrónico (sec-tecnologica@udistrital.edu.co), adjuntando los siguientes documentos en formato PDF:\n- Oficio firmado solicitando copia del acta de grado, notificando la razón de la misma.\n- Copia de la cédula de ciudadanía\n- Pago de los derechos pecuniarios por concepto de Copias de Actas de grado.\n\n 3.La copia del Acta de Grado se emite únicamente de manera física en un tiempo de tres (3) días hábiles, desde el momento de recibida la documentación completa al correo de la Secretaría Académica de la Facultad tecnológica, *este trámite se debe realizar de manera personal, no se responden solicitudes a nombre de terceros*.\n\n4.La copia del acta de grado deberá ser recogida en la oficina de la Secretaría Académica de la Facultad tecnológica de lunes a viernes de 9:30 a.m. a 12:30 p.m. y 2:00 p.m. a 4:30 p.m.\n\n En el siguiente enlace podrá encontrar la información más detallada: https://ftecnologica.udistrital.edu.co/node/595`,
  ];

  jsonData.Opcion[0].DuplicadoDeDiplomas = duplicados[0].trim();
  jsonData.Opcion[1].DuplicadoDeActaDeGrado = duplicados[1].trim();
  console.log(duplicados[1]);
  // Convertir el JSON de nuevo a string
  const updatedJsonData = JSON.stringify(jsonData, null, 2);

  // Guardar el JSON actualizado en un nuevo archivo o sobrescribir el existente
  fs.writeFile(filePath, updatedJsonData, "utf8", (err) => {
    if (err) {
      console.error("Error escribiendo el archivo:", err);
      return;
    }
    console.log("Archivo JSON actualizado guardado como data_updated.json");
  });
};

const tramite = async (data, jsonData) => {
  const filePath = path.resolve(__dirname, "../resource", "tramites.json");
  let tramites = [
    `1.Realizar el pago pecuniario correspondiente al concepto de Certificado de Estudio, código: 41, cuenta de ahorros: 230-81461-8(Instructivo de Costos de Derechos Pecuniarios: ${data} ). El respectivo pago se podrá realizar a través de las sucursales del Banco de Occidente o por medio de Pagos Seguros en Línea (PSE) a través del Sistema de gestión Académica.\n\n2. Una vez realizado el pago, se deberá realizar la solicitud vía correo electrónico (sec-tecnologica@udistrital.edu.co), enviando en archivo adjunto el comprobante del pago realizado. Así mismo, en el cuerpo del correo aportar los siguientes datos: Nombre Completo, Número de Cédula, Código Estudiantil, Proyecto Curricular y tipo de solicitud (Certificado de Mejor Promedio o Mejor Ecaes o puesto ocupado).\n\n3.El certificado de Mejor Promedio o Mejor Ecaes o puesto ocupado se emite en formato digital y será respondido de vuelta al correo electrónico del cual se realizó la solicitud, en un tiempo de tres (3) días hábiles, desde el momento de recibida la solicitud en la Secretaría Académica de la Facultad tecnológica. *Nota: este trámite deberá realizarse de manera personal, no se responden solicitudes a nombre de terceros.*\n\n En el siguiente enlace podrá encontrar la información más detallada: https://ftecnologica.udistrital.edu.co/node/341`,
    `1. Realizar el pago pecuniario correspondiente al concepto de Certificado de Estudio, código: 41, cuenta de ahorros: 230-81461-8(Instructivo de Costos de Derechos Pecuniarios: ${data} ). El respectivo pago se podrá realizar a través de las sucursales del Banco de Occidente o por medio de Pagos Seguros en Línea (PSE) a través del Sistema de gestión Académica.\n\n2. Una vez realizado el pago, se deberá realizar la solicitud vía correo electrónico (sec-tecnologica@udistrital.edu.co), enviando en archivo adjunto el comprobante del pago realizado. Así mismo, en el cuerpo del correo aportar los siguientes datos: Nombre Completo, Número de Cedula, Código Estudiantil, Proyecto Curricular y tipo de solicitud (Certificado de Titulación).\n\n3.El certificado de Titulación se emite en formato digital y será respondido de vuelta al correo electrónico del cual se realizó la solicitud, en un tiempo de tres (3) días hábiles, desde el momento de recibida la solicitud en la Secretaría Académica de la Facultad tecnológica. *Nota: este trámite deberá realizarse de manera personal, no se responden solicitudes a nombre de terceros*\n\n En el siguiente enlace podrá encontrar la información más detallada: https://ftecnologica.udistrital.edu.co/node/340`,
    `1. Realizar el pago pecuniario correspondiente al concepto de Certificado de Estudio, código: 41, cuenta de ahorros: 230-81461-8(Instructivo de Costos de Derechos Pecuniarios: ${data} ).El respectivo pago se podrá realizar a través de las sucursales del Banco de Occidente o por medio de Pagos Seguros en Línea (PSE) a través del Sistema de gestión Académica.\n\n 2. Una vez realizado el pago, se deberá realizar la solicitud vía correo electrónico (sec-tecnologica@udistrital.edu.co), enviando en archivo adjunto el comprobante del pago realizado. Así mismo, en el cuerpo del correo aportar los siguientes datos: Nombre Completo, Número de Cedula, Código Estudiantil, Proyecto Curricular y tipo de solicitud (Certificado de Egresado).\n\n 3. El certificado de Egresado se emite en formato digital y será respondido de vuelta al correo electrónico del cual se realizó la solicitud, en un tiempo de tres (3) días hábiles, desde el momento de recibida la solicitud en la Secretaría Académica de la Facultad tecnológica. Nota: este trámite deberá realizarse de manera personal, no se responden solicitudes a nombre de terceros.\n\n En el siguiente enlace podrá encontrar la información más detallada: https://ftecnologica.udistrital.edu.co/node/339`,
    `1. Realizar el pago pecuniario correspondiente al concepto de Certificado de Notas, código: 40, cuenta de ahorros: 230-81461-8(Instructivo de Costos de Derechos Pecuniarios: ${data} ). El respectivo pago se podrá realizar a través de las sucursales del banco de Occidente o por medio de Pagos Seguros en Línea (PSE) a través del Sistema de gestión Académica.\n\n 2. Una vez realizado el pago, se deberá realizar la solicitud vía correo electrónico (sec-tecnologica@udistrital.edu.co), enviando en archivo adjunto el comprobante del pago realizado. Así mismo, en el cuerpo del correo aportar los siguientes datos: Nombre Completo, Número de Cedula, Código Estudiantil, Proyecto Curricular del cual requiere el certificado y tipo de solicitud (Certificado de Notas), indicar si desea el certificado de manera impresa o digital.\n\n 3. Si requiere el certificado de Notas de manera digital, será respondido de vuelta al correo electrónico del cual se realizó la solicitud, en un tiempo de tres (3) días desde el momento de recibida la solicitud en la Secretaría Académica de la Facultad tecnológica. *Nota: este trámite deberá realizarse de manera personal, no se responden solicitudes a nombre de terceros.*\n\n 4. En caso de requerir el certificado de Notas de manera impresa, en el cuerpo del correo hacer mención de esta intención. El certificado deberá ser recogido pasado tres (3) días hábiles desde el momento de recibida la solicitud en la Secretaría Académica de la Facultad tecnológica de lunes a viernes de 9:30 a.m. a 12:30 p.m. y 2:00 p.m. a 4:30 p.m.\n\n En el siguiente enlace podrá encontrar la información más detallada: https://ftecnologica.udistrital.edu.co/node/333`,
    `1. Realizar el pago pecuniario correspondiente al concepto de Certificado de Estudio, código: 41(Instructivo de Costos de Derechos Pecuniarios: ${data} ). El respectivo pago se podrá realizar a través de las sucursales del Banco de Occidente o por medio de Pagos Seguros en Línea (PSE) a través del Sistema de gestión Académica.\n\n 2. Una vez realizado el pago, se deberá realizar la solicitud vía correo electrónico (sec-tecnologica@udistrital.edu.co), enviando en archivo adjunto el comprobante del pago realizado. Así mismo, en el cuerpo del correo aportar los siguientes datos: Nombre Completo, Número de Cedula, Código Estudiantil, Proyecto Curricular y tipo de solicitud (Certificado de Matrícula de Honor).\n\n 3. El certificado de Matrícula de Honor se emite en formato digital y será respondido de vuelta al correo electrónico del cual se realizó la solicitud, en un tiempo de tres (3) días hábiles, desde el momento de recibida la solicitud en la Secretaría Académica de la Facultad tecnológica. Nota: este trámite deberá realizarse de manera personal, no se responden solicitudes a nombre de terceros.\n\n  En el siguiente enlace podrá encontrar la información más detallada: https://ftecnologica.udistrital.edu.co/node/261`,
    `1. Realizar el pago pecuniario correspondiente al concepto de Certificado de Estudio, código: 41(Instructivo de Costos de Derechos Pecuniarios: ${data} ).El respectivo pago se podrá realizar a través de las sucursales del Banco de Occidente o por medio de Pagos Seguros en Línea (PSE) a través del Sistema de gestión Académica.\n\n 2. Una vez realizado el pago, se deberá realizar la solicitud vía correo electrónico (sec-tecnologica@udistrital.edu.co), enviando en archivo adjunto el comprobante del pago realizado. Así mismo, en el cuerpo del correo aportar los siguientes datos: Nombre Completo, Número de Cedula, Código Estudiantil, Proyecto Curricular y tipo de solicitud (Certificado de Monitoria).\n\n 3. El certificado de Monitoria se emite en formato digital y será respondido de vuelta al correo electrónico del cual se realizó la solicitud, en un tiempo de tres (3) días hábiles, desde el momento de recibida la solicitud en la Secretaría Académica de la Facultad tecnológica. *Nota: este trámite deberá realizarse de manera personal, no se responden solicitudes a nombre de terceros*.\n\n  En el siguiente enlace podrá encontrar la información más detallada: https://ftecnologica.udistrital.edu.co/node/260`,
  ];
  jsonData.Opcion[0].ECAES = tramites[0].trim();
  jsonData.Opcion[1].Titulacion = tramites[1].trim();
  jsonData.Opcion[2].Egresado = tramites[2].trim();
  jsonData.Opcion[3].Notas = tramites[3].trim();
  jsonData.Opcion[4].MatriculaHonor = tramites[4].trim();
  jsonData.Opcion[5].Monitorias = tramites[5].trim();
  // Convertir el JSON de nuevo a string
  const updatedJsonData = JSON.stringify(jsonData, null, 2);

  // Guardar el JSON actualizado en un nuevo archivo o sobrescribir el existente
  fs.writeFile(filePath, updatedJsonData, "utf8", (err) => {
    if (err) {
      console.error("Error escribiendo el archivo:", err);
      return;
    }
    console.log("Archivo JSON actualizado guardado como data_updated.json");
  });
};

module.exports = { grado, duplicado, tramite };
