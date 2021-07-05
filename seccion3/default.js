var mostrar = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 25; }
    return ("Se llama " + nombre + ", se apellida " + apellido + " y tiene " + edad + " a\u00F1os");
};
console.log(mostrar("Alex", "Escofet"));
