const fs = require("fs");
const path = require("path");
const transformDate = require("./prepareData/transformDate.js");
const { grado, duplicado, tramite } = require("./prepareData/pecunarios.js");

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
    return null; // En caso de error, retorna null o maneja el error
  }
};

const writeJSONFechas = async (data) => {
  const filePath = path.resolve(__dirname, "resource", "grados.json");
  //Pasar datos del txt de entrada a como deben ir en el JSON
  let formattedDates = transformDate(data);

  // Leer el archivo JSON de forma asíncrona
  let jsonData = await leerArchivoJSON("grados");

  // Modificar el valor de la clave "Fechas"
  jsonData.Opcion[0].Fechas = formattedDates.trim();

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

const writeJSONPecunarios = async (data) => {
  let jsonData1 = await leerArchivoJSON("grados");
  let jsonData2 = await leerArchivoJSON("duplicados");
  let jsonData3 = await leerArchivoJSON("tramites");
  await grado(data, jsonData1);
  await duplicado(data, jsonData2);
  await tramite(data, jsonData3);
};

module.exports = { leerArchivoJSON, writeJSONFechas, writeJSONPecunarios };
