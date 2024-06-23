
# Seccion 01-02: Ejercicio de JavaScript: Gestión de una Biblioteca

## Objetivo

Desarrollar un pequeño programa en JavaScript que permita gestionar libros en una biblioteca personal. El programa debe permitir agregar libros, eliminar libros y buscar libros por su nombre.

## Requisitos

1. **Estructura de datos**: Utiliza un arreglo para almacenar los libros. Cada libro será un objeto que contenga al menos las propiedades `nombre`, `autor`, y `año`.

2. **Funciones**:
   - **Agregar libro**: Esta función debe recibir los datos de un libro y añadirlo al arreglo de libros.
   - **Eliminar libro**: Esta función debe permitir eliminar un libro basándose en su nombre.
   - **Buscar libro**: Esta función debe permitir buscar todos los libros de un autor específico y retornar un arreglo con los libros que coincidan.

3. **Pruebas**:
   - Añade al menos tres libros al inicio.
   - Elimina un libro y muestra el arreglo después de la eliminación.
   - Busca los libros de un autor específico y muestra los resultados.

## Ejemplo de código

```javascript
let biblioteca = [
    { nombre: "El principito", autor: "Antoine de Saint-Exupéry", año: 1943 },
    { nombre: "1984", autor: "George Orwell", año: 1949 },
    { nombre: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 }
];

function agregarLibro(nombre, autor, año) {
    biblioteca.push({ nombre, autor, año });
}

function eliminarLibro(nombre) {
    biblioteca = biblioteca.filter(libro => libro.nombre !== nombre);
}

function buscarLibroPorAutor(autor) {
    return biblioteca.filter(libro => libro.autor === autor);
}

// Pruebas
agregarLibro("Harry Potter y la piedra filosofal", "J.K. Rowling", 1997);
console.log(biblioteca);

eliminarLibro("1984");
console.log(biblioteca);

const librosDeMarquez = buscarLibroPorAutor("Gabriel García Márquez");
console.log(librosDeMarquez);
```