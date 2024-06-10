const start = require("./src/api");
const messageControl = require("./src/messageControl");
const sendMessage = require("./src/message");
//const deleteChat = require("./src/deleteChat");
let usersData = {};
let id = null;
const app = require("./src/server.js");

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

(async () => {
  const client = await start();
  console.log("se asigno client");
  client.on("message", async (message) => {
    const userId = (id = message.from);
    // Si el usuario no tiene datos almacenados, inicializarlos
    if (!usersData[userId]) {
      usersData[userId] = {
        options: [],
        history: [],
        timer: null,
      };
    }

    const userOptions = usersData[userId].options;
    const userHistory = usersData[userId].history;

    if (!usersData[userId].timer) {
      usersData[userId].timer = setTimeout(() => {
        // Limpiar opciones y historial después de 3 minutos de inactividad
        client.sendMessage(
          message.from,
          "Espero haberte sido de ayuda\n¡Ten un buen día!"
        );
        usersData[userId].options = [];
        usersData[userId].history = [];
        usersData[userId].timer = null;
        deleteChat(userId, client);
      }, 180000);
    } else {
      // Resetear el timer si ya existe
      clearTimeout(usersData[userId].timer);
      usersData[userId].timer = setTimeout(() => {
        client.sendMessage(
          message.from,
          "Espero haberte sido de ayuda\n¡Ten un buen día!"
        );
        usersData[userId].options = [];
        usersData[userId].history = [];
        usersData[userId].timer = null;
        deleteChat(userId, client);
      }, 30000);
    }
    // Procesar el mensaje del usuario
    const response = await messageControl(message, userOptions, userHistory);
    client.sendMessage(message.from, response);
    console.log(userOptions);
    console.log(userHistory);
    if (usersData[id].options.length == 3) {
      console.log("Eliminando data");
      usersData[userId].options = [];
      usersData[userId].history = [];
      sendMessage(
        client,
        id,
        "Espero haber sido de ayuda\n Escribenos si necesitas ayuda en algo más"
      );
    }
    console.log(userHistory);
  });
})();

async function deleteChat(phoneNumber, client) {
  return new Promise((resolve, reject) => {
    client
      .getChatById(phoneNumber)
      .then((chat) => {
        //console.log("Chat information = ", chat);
        chat.delete().then((deleteRes) => {
          if (deleteRes) resolve(`successfuly deleted`);
          else reject("something went wrong");
        });
      })
      .catch((err) => {
        if (
          err.message.includes("Cannot read property 'serialize' of undefined")
        )
          reject(`do not have chat history`);
        // can handle other error messages...
      });
  });
}
