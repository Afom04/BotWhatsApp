const fs = require("fs");

//const RtfParser = require("rtf-parser");
const leerArchivoJSON = async (ruta) => {
  try {
    // Lee el archivo JSON de forma síncrona
    const data = fs.readFileSync(`src/resource/${ruta}.json`, "utf8");

    // Parsea el contenido del archivo JSON a un objeto JavaScript
    const jsonObject = JSON.parse(data);

    // Devuelve el objeto JSON
    return jsonObject;
  } catch (error) {
    console.error("Error al leer el archivo JSON:", error);
    return null; // En caso de error, retorna null o maneja el error según necesites
  }
};

/* const transformDates = (input) => {
  const dateLines = input.split("\n");
  const transformedDates = [];

  dateLines.forEach((line) => {
    const [fechaGrado, fechaRecepcion] = line.split(" - ");
    const [dayGrado, monthGrado] = fechaGrado.split(" de ");

    const ranges = fechaRecepcion.split(" y ");
    const dateRange = ranges.map((range) => {
      const [dayStart, monthStart] = range.split(" de ")[0].split(" al ");
      const [dayEnd, monthEnd] = range.split(" de ")[1].split(" de ");

      const formattedRange = `${dayStart.padStart(2, "0")}/${monthStart.substr(
        0,
        3
      )} - ${dayEnd.padStart(2, "0")}/${monthEnd.substr(0, 3)}`;
      return formattedRange;
    });

    const formattedFechaGrado = `${dayGrado.padStart(
      2,
      "0"
    )}/${monthGrado.substr(0, 3)}`;
    const formattedFechaRecepcion = dateRange.join(", ");

    transformedDates.push(
      `*GRADO:* ${formattedFechaGrado}\n*RECEPCIÓN DE DOCUMENTOS:* ${formattedFechaRecepcion}`
    );
  });

  return transformedDates.join("\n\n");
}; */

const writeJSONGrados = async (data) => {
  console.log("Escritura de JSON de grados \n" + data);
  //let datos = transformDates(data);
  /*   let jsonData = await leerArchivoJSON("grados");
  jsonData.Opcion.forEach((opcion) => {
    if (opcion.Fechas) {
      opcion.Fechas = transformDates(opcion.Fechas);
    }
  });

  // Escribir el archivo modificado
  const transformedData = transformDates(data);

  // Escribir el archivo modificado
  fs.writeFile("fechas_modificado.txt", transformedData, "utf8", (writeErr) => {
    if (writeErr) {
      console.error("Error al escribir el archivo modificado:", writeErr);
      return;
    }
    console.log('Archivo modificado guardado como "fechas_modificado.txt".');
  }); */
  /*   console.log(grados);
  console.log(grados.Opcion[0]); */
};

const writeJSONUrl = async (data) => {};

//writeJSONGrados("");

module.exports = { leerArchivoJSON, writeJSONGrados, writeJSONUrl };
