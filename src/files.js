const fs = require("fs");

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

module.exports = leerArchivoJSON;
