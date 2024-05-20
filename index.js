const { Client } = require("whatsapp-web.js");
const start = require("./src/api");
const messageControl = require("./src/messageControl");
let x = 0;
let mensaje;
let options = [];
let history = [];
let client = new Client();
(async () => {
  client = await start();
  console.log("se asigno client");
  client.on("message", async (message) => {
    if (x == 0) {
      setTimeout(() => {
        //Agregar limpieza de chats
        client.sendMessage(
          message.from,
          "Muchas gracias por usarme, espero haberte sido de ayuda\n¡Ten un buen día!"
        );
        options = [];
        x = 0;
        //client.delete; Borrar CHATS luego de conversacion
      }, 300000);
      x++;
    } //Corregir VOLVER/ Cambiar evaluación de 3er nivel antes de recibir mensaje
    //console.log(options);
    mensaje = await messageControl(client, message, options, history);
    client.sendMessage(message.from, mensaje);
    //console.log(options);
  });
})();
