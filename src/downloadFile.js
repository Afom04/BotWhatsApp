const http = require('http');
const fs = require('fs');

function descargarPDF(desdeURL, nombreArchivo) {
  return new Promise((resolve, reject) => {
    // Parsear la URL para obtener el hostname y el path
    const { hostname, path } = new URL(desdeURL);

    // Configurar las opciones de la solicitud HTTP
    const opciones = {
      hostname: hostname,
      path: path,
      method: 'GET',
    };

    // Realizar la solicitud HTTP
    const solicitud = http.request(opciones, (respuesta) => {
      // Verificar el código de estado de la respuesta
      if (respuesta.statusCode !== 200) {
        reject(`Error al descargar el archivo. Código de estado: ${respuesta.statusCode}`);
        return;
      }

      // Crear un flujo de escritura para guardar el archivo descargado
      const flujoEscritura = fs.createWriteStream(nombreArchivo);

      // Pipe (tubería) el contenido de la respuesta HTTP al flujo de escritura
      respuesta.pipe(flujoEscritura);

      // Resolver la promesa cuando se complete la descarga
      flujoEscritura.on('finish', () => {
        resolve(`Archivo ${nombreArchivo} descargado correctamente.`);
      });

      // Manejar errores durante la descarga
      flujoEscritura.on('error', (error) => {
        reject(`Error al guardar el archivo: ${error.message}`);
      });
    });

    // Manejar errores de conexión
    solicitud.on('error', (error) => {
      reject(`Error al realizar la solicitud HTTP: ${error.message}`);
    });

    // Enviar la solicitud HTTP
    solicitud.end();
  });
}

// Ejemplo de uso
const urlPDF = 'https://ftecnologica.udistrital.edu.co/sites/default/files/2024-01/CIRCULAR%20001%20DE%202024.pdf';
const nombreArchivo = 'archivo_descargado.pdf';

descargarPDF(urlPDF, nombreArchivo)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error));