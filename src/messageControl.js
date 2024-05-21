const { message } = require("whatsapp-web.js");
const file = require("./files");
let grados = null;
let tramites = null;
let duplicados = null;
let historial = null;
const firstMessage =
  "¿En que te puedo ayudar el día de hoy?\n\n Pulsa:\n  1.Para información de grados\n  2.Para obtener información sobre duplicados\n  3.Para obtener información sobre Trámites\n";
const error = "Opción no válida.\n";
const back = (body, options) => {
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
  let tam = options.length;
  return envio === error
    ? options.splice(tam - 1, tam)
    : "beforeMesagge(options, envio)";
};
/* const messageLoad = (options) => {
  if (options[1] == 0) {
    return historial[0];
  }
  if (options[2] == 0) {
    return historial[1];
  }
};
const beforeMesagge = (options, mensaje) => {
  if (options.length == 2) {
    historial[0] = mensaje;
  }
  if (options.length == 3) {
    historial[1] = mensaje;
  }
}; */
let read = [
  //Funcion que permite ir a leer en el JSON segun profundidad
  (options) => {
    //Posible manejo de asincronia
    console.log("Primer menu");
    return options[1] == 1
      ? grados.Mensaje
      : options[1] == 2
      ? duplicados.Mensaje
      : options[1] == 3
      ? tramites.Mensaje
      : options[1] == 0
      ? console.log("Volvieno a mostrar FirstMessage")
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
      ? "" //Ver como devolver a opcion de Primer menu
      : error;
  },
  (options) => {
    console.log("Tercer menu");
    options = [];
    return "¿Hay algo más en lo que te pueda ayudar?\n1.SI\n2.NO";
  },
];
async function messageControl(message, options, history) {
  grados = await file("grados");
  tramites = await file("tramites");
  duplicados = await file("duplicados");
  let mensaje = null;
  historial = history;
  const { from, to, body } = message; //Desestrucurar el mensaje
  //Ver tamaño del arreglo para saber a cual profundidar ir y ver el valor mismo para desenpacacar de JSON
  if (options[0] == 1 || options.length == 0) {
    //Verificar primer mensaje y ofrecer menu de opciones
    options.push(body);
    return firstMessage;
  } else if (options[0] != 2) {
    options.push(body);
    console.log(options);
    let control = options.length == 2 ? 2 : 3; //Variable que controla la profundidad de lectura del JSON
    let caso = parseInt(options[control - 1]); //Ver que opción del menu ir
    console.log(`Control ${control} y Caso${caso}`);
    /*     if (control == 4) {
      mensaje = "¿Hay algo más en lo que te pueda ayudar?\n1.SI\n2.NO";
      options = [];
      return mensaje;
    } else { */
    switch (caso) {
      case 1:
        console.log("Caso 1");
        mensaje = read[control - 2](options); //Funcion en array que lee el JSON según profundidad
        console.log(mensaje);
        break;
      case 2:
        console.log("Caso 2");
        mensaje = read[control - 2](options); //Funcion en array que lee el JSON según profundidad
        break;
      case 3:
        console.log("Caso 3");
        mensaje = read[control - 2](options); //Funcion en array que lee el JSON según profundidad
        break;
      case 4:
        console.log("Caso 4");
        mensaje = read[control - 2](options); //Funcion en array que lee el JSON según profundidad
        break;
      case 5:
        console.log("Caso 5");
        mensaje = read[control - 2](options); //Funcion en array que lee el JSON según profundidad
        break;
      case 6:
        console.log("Caso 6");
        mensaje = read[control - 2](options); //Funcion en array que lee el JSON según profundidad
        break;
      case 0:
        console.log("Caso 0" + options);
        if (parseInt(options[1]) == 0) {
          //Ver si en el primer menu intentan volver a un anterior -> No posible
          console.log("Verificando error");
          mensaje = error;
          options.pop();
        } else {
          //Volver al menu anterior(Mientras no sea el primero)
          //options.pop();
          //mensaje = read[control - 2](options);
          //mensaje = messageLoad(options);
          mensaje = "Ingresa la opción teniendo en cuenta el menu anterior";
          console.log(mensaje);
          //options.pop();
          back(body, options);
        }
        break;
      default:
        mensaje = error;
        break;
    }
    mensaje = type(mensaje); //Verificando el tipo de mensaje sacado de JSON, si es interno se desempaqueta
    mensaje = value(mensaje); //Verificando que el mensaje no sea indefinido en caso de no existir en el JSON ->Asigna mensaje de error
    validateError(mensaje, options); //Verificando que si ocurre un error, se vuelve al menu del cual recibe el mensaje
    return mensaje;
    //}
  } else {
  }
}
module.exports = messageControl;
/* Lograr que al volver al menú anterior vuelva de una vez, no necesitar mirar arriba */
/* Lograr que cuando llegue al fondo del árbol, vuelva al inicio */
