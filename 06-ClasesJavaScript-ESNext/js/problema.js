const alexis = {
    nombre:'Alexis',
    edad: 30,
    imprimir(){
        console.log(this.nombre);
    }
}


function Persona (nombre, edad){
    console.log('Se ejecuto');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = ()=>{
        console.log(this.nombre);
    };
}

const maria = new Persona ('Maria', 19);
console.log(maria);
maria.imprimir();