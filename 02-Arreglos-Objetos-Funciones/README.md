
# 02- Arreglos Objetos Funciones

## Tabla de Contenidos

- [Introducción](#introducción)
- [Datos Primitivos](#datos-primitivos)
- [Palabras Reservadas](#palabras-reservadas)
- [Arreglos](#arreglos)
- [Objetos Literales](#objetos-literales)
- [Funciones](#funciones)
- [Funciones de Flecha](#funciones-de-flecha)
- [Retorno de las Funciones](#retorno-de-las-funciones)
- [Ejercicios y Ejemplos](#ejercicios-y-ejemplos)

## Introducción

Este documento contiene apuntes y ejemplos básicos de JavaScript, diseñados para que cualquier persona pueda entenderlos y utilizarlos como guía.

JavaScript es un lenguaje débilmente tipado, lo que significa que no es necesario definir el tipo de datos, ya que JavaScript lo hace automáticamente.

## Datos Primitivos

Los datos primitivos no son objetos y son inmutables. Los principales tipos de datos primitivos en JavaScript son:

- **Boolean**: `true` o `false`.
- **Null**: Representa la ausencia de valor.
- **Undefined**: Una variable declarada que no tiene un valor asignado.
- **Number**: Números enteros o de punto flotante.
- **String**: Cadena de caracteres.
- **Symbol**: Valores únicos que no son iguales a ningún otro valor.

```javascript
let booleano = true;
let numero = 123;
let cadena = "Hola";
let simbolo = Symbol('unico');
```

### Notas

- Las comillas simples (`'`), dobles (`"`) y los backticks (`` ` ``) se utilizan para declarar strings.
- Es recomendable usar camelCase para nombrar variables en JavaScript.

## Palabras Reservadas

Las palabras reservadas en JavaScript tienen un uso específico y no se deben utilizar para nombrar variables. Algunos ejemplos incluyen:

```text
break, export, super, case, extends, switch, catch, finally, this, class, for, throw, const, function, try, continue, if, typeof, debugger, import, var, default, in, void, delete, instanceof, while, do, new, with, else, return, yield, let
```

## Arreglos

Los arreglos son objetos similares a listas que pueden contener múltiples elementos, generalmente del mismo tipo.

```javascript
let videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log(videojuegos[0]); // 'Mario 3'
```

### Métodos de Arreglos

- `push`: Agrega un elemento al final.
- `unshift`: Agrega un elemento al inicio.
- `pop`: Elimina el último elemento.
- `splice`: Elimina o reemplaza elementos.
- `indexOf`: Encuentra el índice de un elemento.

```javascript
let juegos = ['Zelda', 'Mario', 'Metroid'];
juegos.push('F-Zero'); // ['Zelda', 'Mario', 'Metroid', 'F-Zero']
let metroidIndex = juegos.indexOf('Metroid'); // 2
```

## Objetos Literales

JavaScript tiene dos tipos principales de datos: objetos y primitivos. Si no es primitivo, es un objeto.

```javascript
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};
console.log(personaje.nombre); // 'Tony Stark'
```

### Métodos de Objetos

- `delete`: Elimina una propiedad.
- `Object.freeze`: Congela un objeto, impidiendo cambios.
- `Object.entries`: Devuelve un array con los pares `[key, value]` del objeto.
- `Object.values`: Devuelve un array con los valores del objeto.

```javascript
delete personaje.edad;
Object.freeze(personaje);
```

## Funciones

Las funciones permiten ejecutar código repetidamente. En JavaScript, se pueden declarar de varias formas:

### Función Declarada

```javascript
function saludar(nombre) {
    console.log('Hola ' + nombre);
}
saludar('Tony Stark');
```

### Función Anónima

```javascript
const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
};
saludar2('Peter Parker');
```

### Función de Flecha

Las funciones de flecha tienen una sintaxis más compacta:

```javascript
const saludarFlecha = () => {
    console.log('Hola Flecha');
};
saludarFlecha();

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
};
saludarFlecha2('Goku');
```

### Retorno de Funciones

Las funciones pueden retornar valores utilizando la palabra clave `return`.

```javascript
const sumar = (a, b) => {
    return a + b;
};
console.log(sumar(5, 10)); // 15
```

### Parámetros Rest

El operador `...args` permite capturar múltiples argumentos en un arreglo.

```javascript
const imprimeArgumentos = (...args) => {
    console.log(args);
};
imprimeArgumentos(10, true, 'Ironman'); // [10, true, 'Ironman']
```

## Ejercicios y Ejemplos

Aquí hay ejemplos prácticos que abarcan los temas discutidos:

```javascript
// Ejemplo de objeto
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

// Ejemplo de función
function crearPersona(nombre, apellido, edad) {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    };
}

const persona = crearPersona('Tony', 'Stark', 45);
console.log(persona);

// Función de flecha con retorno implícito
const crearPersonaFlecha = (nombre, apellido, edad) => ({ nombre, apellido, edad });
const persona1 = crearPersonaFlecha('Peter', 'Parker', 25);
console.log(persona1);
```
