
# 03-Ciclos y Estructuras de Control en JavaScript

## Tabla de Contenidos

- [Estructuras de Control de Flujo](#estructuras-de-control-de-flujo)
- [Paso de Variables por Valor y por Referencia](#paso-de-variables-por-valor-y-por-referencia)
- [Romper Referencia de Objetos](#romper-referencia-de-objetos)
- [If y Else](#if-y-else)
- [Lógica Booleana](#lógica-booleana)
- [Operadores y Operadores de Asignación](#operadores-y-operadores-de-asignación)
- [Operador Condicional Ternario](#operador-condicional-ternario)
- [Diferentes Usos del Operador Condicional Ternario](#diferentes-usos-del-operador-condicional-ternario)
- [Switch](#switch)
- [While](#while)
- [Do While](#do-while)
- [For](#for)
- [For in](#for-in)
- [For of](#for-of)

## Estructuras de Control de Flujo

En JavaScript, las estructuras de control de flujo permiten dirigir el flujo de ejecución del código basado en ciertas condiciones o en la repetición de bloques de código.

## Paso de Variables por Valor y por Referencia

En JavaScript, los **primitivos** (números, strings, booleanos, `null`, `undefined`, `symbol`) se pasan por valor, mientras que los **objetos** (objetos, arreglos, funciones) se pasan por referencia.

## Romper Referencia de Objetos

Para romper la referencia de un objeto y crear una copia independiente, podemos usar técnicas como:

```javascript
let original = { nombre: 'Juan' };
let copia = { ...original }; // Usando el spread operator
```

## If y Else

La estructura `if` espera un valor booleano (`true` o `false`). Si la condición es verdadera, se ejecuta el bloque de código dentro del `if`.

```javascript
let dia = 0;

if (dia === 0) { // Comparación estricta
    console.log('Domingo');
} else {
    console.log('No es domingo');
}
```

## Lógica Booleana

La lógica booleana maneja valores `true` y `false`. Los operadores lógicos incluyen:

- `!` (negación)
- `&&` (AND)
- `||` (OR)

```javascript
console.log(!true); // false
console.log(true && false); // false
console.log(true || false); // true
```

## Operadores y Operadores de Asignación

Los operadores de asignación (`=`, `+=`, `-=`, etc.) y de comparación (`==`, `===`, `!=`, `!==`) son fundamentales para la manipulación de variables y la toma de decisiones en JavaScript.

## Operador Condicional Ternario

El operador ternario es una forma abreviada de un `if` y `else`.

```javascript
let horaActual = 10;
let mensaje = (horaActual >= 11) ? 'Estamos abiertos' : 'Estamos cerrados';
console.log(mensaje);
```

## Diferentes Usos del Operador Condicional Ternario

El operador condicional ternario se puede usar para asignar valores basados en una condición de manera concisa.

```javascript
let dia = 5;
let horaApertura = (dia === 0 || dia === 6) ? 9 : 11;
```

## Switch

El `switch` se usa para ejecutar uno entre varios bloques de código basado en el valor de una expresión.

```javascript
let dia = 3;
switch (dia) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('Día no válido');
}
```

## While

El bucle `while` ejecuta un bloque de código mientras una condición sea verdadera.

```javascript
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}
```

## Do While

El bucle `do...while` ejecuta un bloque de código al menos una vez, y luego lo repite mientras la condición sea verdadera.

```javascript
let contador = 0;
do {
    console.log(contador);
    contador++;
} while (contador < 5);
```

## For

El bucle `for` es una forma concisa de iterar un número fijo de veces.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## For in

El bucle `for...in` recorre todas las propiedades enumerables de un objeto.

```javascript
const objeto = { a: 1, b: 2, c: 3 };
for (let clave in objeto) {
    console.log(`${clave}: ${objeto[clave]}`);
}
```

## For of

El bucle `for...of` recorre objetos iterables (como arreglos).

```javascript
const arreglo = ['a', 'b', 'c'];
for (let valor of arreglo) {
    console.log(valor);
}
```

## Ejemplo Completo

```javascript
const carros = ['Ford', 'Chevrolet', 'Toyota', 'Nissan', 'Honda'];

console.warn('For tradicional');
for (let i = 0; i < carros.length; i++) {
    console.log(carros[i]);
}

console.warn('For in');
for (let i in carros) {
    console.log(carros[i]);
}

console.warn('For of');
for (let carro of carros) {
    console.log(carro);
}

const hoy = new Date();
let dia = hoy.getDay();
console.log(dia === 0 ? 'Domingo' : 'No es domingo');

let diasSemana = {0: 'Domingo', 1: 'Lunes', 2: 'Martes', 3: 'Miércoles', 4: 'Jueves', 5: 'Viernes', 6: 'Sábado'};
let diaIngresado = 3;
console.log(diasSemana[diaIngresado] || 'Día no definido');
```

