
//tips proooo xd

function crearPersona (nombre, apellido, edad){
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
}

const persona = crearPersona('Tony', 'Stark', 45);
console.log(persona);

const crearPesona1 = (nombre,apellido,edad) =>  ({nombre, apellido, edad})

const persona1 = crearPesona1('Peter', 'Parker', 25);
console.log(persona1);


function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(10, true, false, 'Ironman', 'Spiderman');


const imprimeArgumentos2 = (...args) => {
    return args;
}

const Tony ={
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
}

const imprimirPropiedades = ( personaje) => {
    console.log(Tony.nombre);
    console.log(Tony.codeName);
    console.log(Tony.vivo);
    console.log(Tony.edad);
    console.log(Tony.trajes);
}

imprimirPropiedades(Tony);