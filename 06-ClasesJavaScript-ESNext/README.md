
# Curso de JavaScript: Conceptos Avanzados

En esta sección tocaremos los siguientes temas:

- Problematica de prototipos
- Clases
- Sets
- Gets
- Métodos estáticos
- Gets estáticos
- ESNext: Propiedades privadas (aún no soportado completamente)
- Singletons
- Múltiples constructores

Esta sección es fundamental para la programación moderna de JavaScript, nos servirá mucho en el futuro. Recuerden que al final de la sección tienen el código fuente.

## Problematica de prototipos

Antes que todo, recuerda que `appendChild` sirve para modificar los elementos del HTML y agregarlos. Por ejemplo:

```javascript
const h1 = document.createElement('h1');
h1.innerText = 'Alexis Lapo';
document.body.appendChild(h1);
```

## Generación de Objetos

Para generar un objeto en JavaScript, es similar a Java, pero lo hacemos como una función, declarando los `this` y las funciones pertenecientes al objeto. Luego, para instanciar el objeto, usamos `new`.

```javascript
function Persona() {
    this.nombre = '';
    this.edad = 0;
}

const alexis = new Persona();
```

## Clases

Usamos la palabra reservada `class` y camelCase para nombrarlas. El constructor es el método que se ejecuta cuando se crea una nueva instancia de una clase. El objetivo de una clase es tener en una instancia los métodos, atributos y propiedades que se repiten.

```javascript
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
```

### Métodos

Las declaraciones de métodos se acostumbran a estar después del constructor.

```javascript
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    decirNombre() {
        return this.nombre;
    }
}
```

### Sets y Gets

Los sets y gets permiten asignar y obtener datos.

```javascript
class Persona {
    constructor(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
}
```

### Métodos Estáticos

Los métodos estáticos permiten usar un atributo de la clase sin necesidad de instanciarla.

```javascript
class Matematicas {
    static sumar(a, b) {
        return a + b;
    }
}

console.log(Matematicas.sumar(2, 3));
```

### Propiedades Privadas

Con `#` antes del nombre de la propiedad, se declaran propiedades privadas. Sin embargo, los métodos privados no están completamente soportados aún.

```javascript
class Rectangulo {
    #area;

    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }
}
```

### Subclases

Si tenemos atributos similares entre dos clases, podemos usar `extends` para crear una subclase.

```javascript
class Heroe extends Persona {
    constructor(nombre, apellido, superpoder) {
        super(nombre, apellido);
        this.superpoder = superpoder;
    }
}
```

### Singleton

Un singleton es una instancia única de una clase. Esto asegura que todos apunten al mismo espacio en memoria.

```javascript
class Singleton {
    static instancia;
    nombre = '';

    constructor(nombre = '') {
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Blackpanther');

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);
```

### Código Fuente

Puedes encontrar el código fuente al final de esta sección en los siguientes archivos:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- <script src="/06-ClasesJavaScript-ESNext/js/problema.js"></script> -->
    <!-- <script src="/06-ClasesJavaScript-ESNext/js/class.js"></script> -->
    <!-- <script src="/06-ClasesJavaScript-ESNext/js/sub-class.js"></script> -->
    <!-- <script src="/06-ClasesJavaScript-ESNext/js/esnext.js"></script> -->
    <script src="/06-ClasesJavaScript-ESNext/js/singleton.js"></script> 
</body>
</html>
```

## Ejemplo de Uso de Clases

```javascript
class Persona {
    constructor(nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} con el código ${this.codigo} y mi frase es ${this.frase}`);
    }
}

const alexisLapo = new Persona('Alexis', '01', 'Hola mundo');
console.log(alexisLapo);

const ronaldo = new Persona('Ronaldo', '02', 'Siuuuu');
ronaldo.quienSoy();
```

### Subclase Heroe

```javascript
class Heroe extends Persona {
    constructor(nombre, codigo, frase, clan) {
        super(nombre, codigo, frase);
        this.clan = clan;
    }
}

const alexisLapo = new Heroe('Alexis', '01', 'Hola mundo', 'Vengadores');
console.log(alexisLapo);

