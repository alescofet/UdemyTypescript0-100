var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, fecha_, puertas_) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }
    Vehiculo.prototype.acelerar = function () {
        console.log("Ojo que acelero");
    };
    Vehiculo.prototype.frenar = function () {
        console.log("Ojo que freno");
    };
    Vehiculo.prototype.pitar = function () {
        console.log("Ojo que pito");
    };
    return Vehiculo;
}());
var coche = new Vehiculo("Ford", "7/07/2021", 5);
console.log(coche.marca, coche.fecha);
