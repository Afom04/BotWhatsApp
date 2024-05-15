const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { readFile, writeFile } = require("fs").promises;

const app = express();
const PORT = 3000;

// Habilitar CORS
app.use(cors());

// Configurar multer para manejar archivos en la solicitud POST
const upload = multer({
  dest: "uploads/",
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "text/plain") {
      cb(null, true);
    } else {
      cb(new Error("El archivo debe ser de tipo texto plano (.txt)"));
    }
  },
});

// Ruta para recibir archivos TXT mediante una solicitud POST
app.post("/api/upload", upload.single("archivo"), async (req, res) => {
  try {
    const option=req.body.opcion;
    console.log(option);
    const file = req.file; // Obtener el archivo del cuerpo de la solicitud

    // Leer el contenido del archivo TXT
    const txtContent = await readFile(file.path, {
      encoding: "utf-8",
    });
    console.log(txtContent);
    if(option){}; //Agregar lógica según opcion seleccionada para actualizar el JSON

    // Envía una respuesta al cliente
    res.json({
      mensaje: "Archivo TXT recibido y procesado correctamente.",
    });
  } catch (error) {
    console.error("Error al procesar el archivo:", error);
    res.status(500).json({
      error: "Error interno del servidor",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
