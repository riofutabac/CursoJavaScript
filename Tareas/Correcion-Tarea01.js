let libros = [];

const agregarLibro = (nombre, autor, anio) => {
    const libro = { nombre, autor, anio };
    libros.push(libro);
}

const eliminarLibro = (nombre) => {
    libros = libros.filter(libro => libro.nombre !== nombre);
}

const buscarLibro = (nombre) => {
    return libros.filter(libro => libro.nombre === nombre);
}

// Pruebas
agregarLibro('El señor de los anillos', 'J.R.R. Tolkien', 1954);
agregarLibro('Harry Potter', 'J.K. Rowling', 1997);
agregarLibro('Cien años de soledad', 'Gabriel García Márquez', 1967);

console.log('Libros después de agregar:', libros);

eliminarLibro('Harry Potter');
console.log('Libros después de eliminar "Harry Potter":', libros);

const libroEncontrado = buscarLibro('Cien años de soledad');
console.log('Buscar "Cien años de soledad":', libroEncontrado);


