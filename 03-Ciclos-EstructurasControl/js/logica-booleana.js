
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true); // true
console.log(!true); // false

console.log(false); // false
console.log(!false); // true

console.log(!regresaFalse()); // true
console.log(!regresaTrue()); // false

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150; // 150

console.log({ a1 });

