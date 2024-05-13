const { Client, message } = require("whatsapp-web.js");
const send = require("./message");
const file = require("./files");
let grados = null;
let tramites = null;
let duplicados = null;
var firstMessage =
  "¿En que te puedo ayudar el día de hoy?\n\n Pulsa:\n  1.Para información de grados\n  2.Para obtener información sobre duplicados\n  3.Para obtener información sobre Trámites\n";
const error = "Opción no válida.\n";
const back = (body, options) => {
  //Renombrar a mas intuitivas
  let tam = options.length;
  return body == 0 && tam > 1 ? options.splice(tam - 2, tam) : "";
};
const type = (envio) => {
  return typeof envio === "object" ? (envio = Object.values(envio)[0]) : envio;
};
const value = (envio) => {
  return typeof envio === "undefined" ? (envio = error) : envio;
};
const validateError = (envio, options) => {
  return envio == error ? options.pop() : envio;
};
let read = [
  (options) => {
    console.log("Primer menu");
    return options[1] == 1
      ? grados.Mensaje
      : options[1] == 2
      ? duplicados.Mensaje
      : options[1] == 3
      ? tramites.Mensaje
      : options[1] == 0
      ? global.firstMessage
      : error;
  },
  (options) => {
    console.log("Segundo menu");
    return options[1] == 1
      ? grados.Opcion[options[2] - 1]
      : options[1] == 2
      ? duplicados.Opcion[options[2] - 1]
      : options[1] == 3
      ? tramites.Opcion[options[2] - 1]
      : options[2] == 0
      ? "Cargando.."
      : error;
  },
];
async function messageControl(client, message, options) {
  grados = await file("grados");
  tramites = await file("tramites");
  duplicados = await file("duplicados");
  let mensaje = null;
  const { from, to, body } = message; //Desestrucurar el mensaje
  //Ver tamaño del arreglo para saber a cual profundidar ir y ver el valor mismo para desenpacacar de JSON
  if (options.length == 0 || options[0] == 1) {
    options.push(body);
    return firstMessage;
  } else if (options[0] != 2) {
    options.push(body);
    console.log(options);
    let control = options.length == 2 ? 2 : 3;
    let caso = parseInt(options[control - 1]);
    console.log(`Control ${control} y Caso${caso}`);
    switch (caso) {
      case 1:
        console.log("Caso 1");
        mensaje = read[control - 2](options);
        console.log(mensaje);
        break;
      case 2:
        console.log("Caso 2");
        mensaje = read[control - 2](options);
        break;
      case 3:
        console.log("Caso 3");
        mensaje = read[control - 2](options);
        break;
      case 4:
        console.log("Caso 4");
        mensaje = read[control - 2](options);
        break;
      case 5:
        console.log("Caso 5");
        mensaje = read[control - 2](options);
        break;
      case 6:
        console.log("Caso 6");
        mensaje = read[control - 2](options);
        break;
      case 0:
        console.log("Caso 0" + options);
        if (parseInt(options[1]) == 0) {
          console.log("verficicando error");
          mensaje = error;
          options.pop();
        } else {
          //options.pop();
          //mensaje = read[control - 2](options);
          mensaje="Cargando...\n Ingrese la opción a cual quiere volver";
          console.log(mensaje);
          //options.pop();
          back(body, options);
        }
        break;
      default:
        mensaje = error;
        break;
    }
    mensaje = type(mensaje);
    /*     console.log(value(mensaje));
    console.log(validateError(mensaje, options)); */
    return mensaje;
  } else {
    options.pop();
    return error;
  }
}
module.exports = messageControl;
/* Lograr que al volver al menú anterior vuelva de una vez, no necesitar mirar arriba */
/* Lograr que cuando llegue al fondo del árbol, vuelva al inicio */