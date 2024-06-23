let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

juegos.forEach (function (elemento, indice, arr) {
    console.log({ elemento, indice, arr });
});

juegos.push('F-Zero');

juegos.unshift('Fire Emblem');

juegos.pop();

// juegos.splice(posicionBorrar, cuantoElementos);

let juegosBorrados = juegos.splice(1, 2);

console.log(juegos);

console.log ('Juegos Borrados  ', juegosBorrados)

let metroidIndex = juegos.indexOf('Metroid');

console.log({ metroidIndex });