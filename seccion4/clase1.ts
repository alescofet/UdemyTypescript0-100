class Vehiculo {
    marca:string
    fecha:string
    puertas:number

    constructor(marca_:string, fecha_:string, puertas_:number){
        this.marca = marca_
        this.fecha = fecha_
        this.puertas = puertas_
    }
    acelerar():void {
        console.log("Ojo que acelero"); 
    }
    frenar():void {
        console.log("Ojo que freno"); 
    }
    pitar():void {
        console.log("Ojo que pito"); 
    }
}

const coche = new Vehiculo("Ford","7/07/2021", 5)

console.log(coche.marca, coche.fecha);
