// genra una clase de singlentons 
// para que solo se pueda instanciar una vez
// y se pueda usar en cualquier parte del codigo
// sin tener que volver a instanciarla

class Singleton {
    static instancia;
    nombre = '';

    constructor(nombre = '') {
        // console.log(this);
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
        // console.log(this);
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Blackpanther');

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);
