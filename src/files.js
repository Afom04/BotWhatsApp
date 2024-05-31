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

const transformedData = (data) => {
  // Separar las líneas del archivo
  const lines = data.split("\n").filter((line) => line.trim() !== "");

  // Crear un array para almacenar las líneas convertidas
  let convertedLines = [];

  // Procesar cada línea
  lines.forEach((line) => {
    const [grado, recepcion] = line.split(" - ");

    // Formatear las líneas según el formato solicitado
    convertedLines.push(`*GRADO:* ${grado.trim()}`);
    convertedLines.push(`*RECEPCIÓN DE DOCUMENTOS:* ${recepcion.trim()} \n`);
  });

  // Unir las líneas convertidas con doble salto de línea
  const result = convertedLines.join("\n");
  return result;
};

const writeJSONGrados = async (data) => {
  //Pasar datos del txt de entrada a como deben ir en el JSON
  let formattedDates = transformedData(data);

  // Leer el archivo JSON de forma asíncrona
  let jsonData = await leerArchivoJSON("grados");

  // Modificar el valor de la clave "Fechas"
  jsonData.Opcion[0].Fechas = formattedDates.trim();

  // Convertir el JSON de nuevo a string
  const updatedJsonData = JSON.stringify(jsonData, null, 2);

  // Guardar el JSON actualizado en un nuevo archivo o sobrescribir el existente
  fs.writeFile("data_updated.json", updatedJsonData, "utf8", (err) => {
    if (err) {
      console.error("Error escribiendo el archivo:", err);
      return;
    }
    console.log("Archivo JSON actualizado guardado como data_updated.json");
  });
};

const writeJSONUrl = async (data) => {};

module.exports = { leerArchivoJSON, writeJSONGrados, writeJSONUrl };
