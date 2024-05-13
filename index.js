/* const fs = require("fs");
const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
//const SESSION_FILE_PATH = "./session.js";
let client;
let sessionData;
//Ver estado de sesion, mirar la autorización y la path
const withSession = () => {
  sessionData = require(SESSION_FILE_PATH);
  client = new Client({
    //Cargue de session
    session: sessionData,
  });

  client.on("ready", () => {
    //Esta listo el user
    console.log("Client is ready!");
  });

  client.on("auth_failure", () => {
    console.log("Error de auntenticación(Borrar el json)");
  });

  client.initialize();
};

const withOutSession = () => {
  console.log("Sin sesion guardada");
  client = new Client({
    authStrategy: new LocalAuth(()=>{
      clienId: "uno"
    }),
  });

  client.on("qr", (qr) => {
    //Generacion de QR de WhatsApp Web
    qrcode.generate(qr, { small: true });
    console.log("QR generado");
  });
  client.on("ready", () => {
    console.log("Client is ready");
  });
  client.on("authenticated", (session) => {
    console.log("Authenticated" + LocalAuth);
  /*   //Funcion que mira credenciales de sesion
    sessionData = session; //Guardando credenciales de session
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(sessionData), (err) => {
      //Guardando en JSON las credenciales de sesion
      if (err) {
        console.log(err);
      }
    }); */ /*
  });
  client.initialize();
};

fs.existsSync(SESSION_FILE_PATH) ? withSession() : withOutSession(); */
const start = require("./src/api.js");
async () => {
  try {
    const cliente = await start();

    cliente.on("message", async (message) => {
      if (message.body === Hola) {
        await cliente.sendMessage(message.from, "Hola, como estás");
      } else {
        await cliente.sendMessage(message.from, "Respuesta no valida");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

