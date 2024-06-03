const transformDate = (data) => {
  // Separar las líneas del archivo
  const lines = data.split("\n").filter((line) => line.trim() !== "");

  // Crear un array para almacenar las líneas convertidas
  let convertedLines = [];

  // Procesar cada línea
  lines.forEach((line) => {
    const [grado, recepcion] = line.split(" - ");

    // Formatear las líneas según el formato
    convertedLines.push(`*GRADO:* ${grado.trim()}`);
    convertedLines.push(`*RECEPCIÓN DE DOCUMENTOS:* ${recepcion.trim()} \n`);
  });

  // Unir las líneas convertidas con doble salto de línea
  const result = convertedLines.join("\n");
  return result;
};

module.exports = transformDate;
