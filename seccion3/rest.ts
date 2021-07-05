const cartaPostres = (postre:string, ...frutas:string[]):void=>{
    console.log(`El postre es ${postre} y tienes ${frutas}`)
}

cartaPostres("postre 1", "naranja","pera")