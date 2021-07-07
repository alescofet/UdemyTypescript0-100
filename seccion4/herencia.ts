class Padre{
    nombre:string
    edad:number
    constructor(nombre_:string, edad_:number){
        this.nombre = nombre_
        this.edad = edad_
    }
    mostrarNombre():void{
        console.log(this.nombre);
        
    }
}

class Hijo extends Padre{
    apellido:string

    constructor(nombre_:string,edad_:number,apellido_:string){
        super(nombre_, edad_)
        this.apellido = apellido_
    }

    mostrarNombreHijo():void{
        console.log(`${this.nombre} ${this.apellido}`);
        
    }
}

const nuevoHijo = new Hijo("Manuel",4,"Muñoz")
nuevoHijo.mostrarNombre()
nuevoHijo.mostrarNombreHijo()
console.log(nuevoHijo.nombre);
