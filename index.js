const start = require("./src/api");
const messageControl = require("./src/messageControl");
let usersData = {};
const app = require("./src/server.js");

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

(async () => {
  const client = await start();
  console.log("se asigno client");
  client.on("message", async (message) => {
    const userId = message.from;
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
        // Limpiar opciones y historial después de 5 minutos de inactividad
        client.sendMessage(
          message.from,
          "Muchas gracias por usarme, espero haberte sido de ayuda\n¡Ten un buen día!"
        );
        usersData[userId].options = [];
        usersData[userId].history = [];
        usersData[userId].timer = null;
      }, 300000);
    } else {
      // Resetear el timer si ya existe
      clearTimeout(usersData[userId].timer);
      usersData[userId].timer = setTimeout(() => {
        client.sendMessage(
          message.from,
          "Muchas gracias por usarme, espero haberte sido de ayuda\n¡Ten un buen día!"
        );
        usersData[userId].options = [];
        usersData[userId].history = [];
        usersData[userId].timer = null;
      }, 300000);
    }

    // Procesar el mensaje del usuario
    const response = await messageControl(message, userOptions, userHistory);
    client.sendMessage(message.from, response);
  });
})();
