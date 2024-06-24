
let  libros = [];

const agregarLibro = (nombre, autor, anio) => {
    const libro = {
        nombre: nombre,
        autor: autor,
        anio: anio
    };
    libros.push(libro);
}

const eliminarLibro = (nombre) => {
    libros.forEach((libro, index) => {
        if (libro.nombre === nombre)
            libros.splice(index, 1);
    });
}

const buscarLibro = (nombre) => {
    libros.forEach((libro, index) => {
        if (libro.nombre === nombre)
            console.log(libro);
    });
}


agregarLibro('El señor de los anillos', 'J.R.R. Tolkien', 1954);
agregarLibro('Harry Potter', 'J.K. Rowling', 1997);
agregarLibro('Cien años de soledad', 'Gabriel García Márquez', 1967);

console.log(libros);

eliminarLibro('Harry Potter');
console.log(libros);

buscarLibro('Cien años de soledad');


// const buscarLibroFilter = (nombre)  => {
//     let libroEncontrado = libros.filter( (libro)=> {
//         if(libro.nombre === nombre) {
//             return true;
//         }
//         return false;
//     })
//     console.log(libroEncontrado);
// }

const buscarLibroFilter = (nombre) => {
    let libroEncontrado = libros.filter(libro => libro.nombre === nombre);
    console.log(libroEncontrado);
}
buscarLibroFilter('El señor de los anillos');



