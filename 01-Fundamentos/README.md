

# 01-Fundamentos

## Consola y Métodos de Salida

Para mostrar mensajes en la consola de JavaScript, usamos el objeto `console` y sus métodos:

```javascript
console.log("Hola mundo");  // Imprime un mensaje en la consola
```
- `console` es el objeto.
- `log` es el método.

```javascript
document.write("Hola mundo");
```
- `document` es el objeto que representa el documento HTML.
- `write` es el método para escribir contenido directamente en el documento HTML.

### Recomendación

No es recomendable mezclar directamente HTML con JavaScript. Es preferible mantenerlos en archivos separados.

## Declaración de Variables

### Let

- Solo accesible dentro del bloque de código `{}` donde se declara.
- No se puede redeclarar en el mismo ámbito.

```javascript
let variable = "valor";
```

### Var

- Su alcance depende de su contexto de creación (función o global).
- Puede ser reasignada y redeclarada.

```javascript
var variable = "valor";
```

### Const

- Tiene ámbito de bloque.
- No puede ser reasignada.

```javascript
const variable = "valor";
```

## Métodos de `console`

Podemos imprimir mensajes en la consola de varias formas:

```javascript
console.log(x);         // Mensaje normal
console.warn(x);        // Mensaje de advertencia
console.error(x);       // Mensaje de error
```

### Ejemplos Avanzados

```javascript
console.log('a', x);     // Imprime 'a' y el valor de x
console.log({a});        // Imprime el objeto con la propiedad a
```

#### Estilos en Consola

Podemos enviar CSS a la consola:

```javascript
console.log('%c Variables', 'color:blue;');
```

#### Tablas en Consola

Para mostrar datos en formato de tabla:

```javascript
console.table({a, b, c, d, x});
```

## Puntos de Interrupción

Podemos utilizar puntos de interrupción (breakpoints) para detener la ejecución del programa en un punto específico para depuración.

## Variables en Múltiples Archivos

Podemos inicializar una variable en un archivo JavaScript y acceder a ella desde otro archivo, aunque no es recomendable:

```javascript
var miVariable = "valor";
```

## Interacción con el Usuario

### Alertas

Para mostrar una alerta:

```javascript
alert("Hola AJLC");
```

### Prompts

Para solicitar entrada de texto del usuario:

```javascript
let nombre = prompt('¿Cuál es tu nombre?', 'Sin nombre');
console.log({ nombre });
```

### Confirmaciones

Para solicitar confirmación del usuario:

```javascript
const seleccion = confirm('¿Estás seguro de borrar esto?');
console.log({ seleccion });
```

## Contextos de Ejecución

Es importante saber dónde se ejecutará el código JavaScript:

- En el navegador, usamos `window`.
- En Node.js, usamos `global`.

Cada entorno tiene funciones diferentes, por ejemplo, `prompt` no funciona en Node.js ejecutando por consola.

## Ejemplo Completo

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola mundo</h1>
    <!-- <script src="js/app.js"></script> -->
    <script src="js/alerts.js"></script>
</body>
</html>
```

```javascript
// alerts.js
alert('Hola AJLC desde alerts.js');

let nombrePromp = prompt('¿Cuál es tu nombre?', 'Sin nombre');
console.log({ nombrePromp });

const seleccion = confirm('¿Estás seguro de borrar esto?');
console.log({ seleccion });
```
