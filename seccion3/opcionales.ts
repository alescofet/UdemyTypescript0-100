const opcionales = (nombre:string, apellido:string, edad?:number)=>{
    if(edad){
        console.log(`se llama ${nombre} su apellido es ${apellido} y su edad es ${edad}`);
    }
    else{
        console.log(`se llama ${nombre} y su apellido es ${apellido}`)
    }
    
}

opcionales("Alex","Escofet")