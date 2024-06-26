
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