const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const fs = require("fs");
async function start() {
  const client = new Client({
    authStrategy: new LocalAuth(() => {
      clienId: "uno";
    }),
    webVersionCache: {
      type: "remote",
      remotePath:
        "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2410.1.html",
    },
  });

  client.on("qr", (qr) => {
    //Generacion de QR de WhatsApp Web
    qrcode.generate(qr, { small: true });
    console.log("QR generado");
  });
  client.on("authenticated", (session) => {
    //Bug de sesion
    console.log(`Sesion autenticada`);
  });
  const fs = require("fs");

  client.on("auth_failure", () => {
    //Verificacion de autenticacion
    console.log("Error de autenticación");
    fs.rmdir("../.wwebsjs_auth", { recursive: true })
      .then(() => {
        console.log('Carpeta ".wwebsjs_auth" eliminada');
        start();
      })
      .catch((err) => {
        console.error("Ocurrió un error al eliminar la carpeta:", err);
      });
  });

  client.on("loading_screen", (porcentaje, message) => {
    //Mostrar en terminal porcentaje de carga
    console.log(`cargando: ${porcentaje} ~ ${message}`);
  });
  client.on("ready", (ses) => {
    console.log("Client is ready");
  });

  await client.initialize();
  console.log("Bot iniciado");
  //Ver esta opcion en una llamada en el server, que haga un while atendiendo y se corte, con eso maneja multiusuario
  return client;
}
module.exports = start;
