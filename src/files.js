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

// Read the RTF file
/* const leerArchivoRTF = () => {
  const filePath = "src/resource/CIRCULAR 001 DE 2024.rtf";
  try {
    // Read the RTF file
    fs.readFileSync(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }
      try {
        // Create an instance of the parser
        const parser = new RtfParser();

        // Parse the RTF data
        const result = parser.parse(data);

        // Print the parsed content
        console.log(result);
      } catch (parseError) {
        console.error("Error parsing RTF:", parseError);
      }
    });
  } catch (readError) {
    console.error("Error reading file:", readError);
  }
};

leerArchivoRTF(); */
module.exports = leerArchivoJSON;
