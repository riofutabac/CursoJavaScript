class Persona{
    _conteo = 0;
    nombre;
    codigo;
    frase;
    static nombre2;

    constructor(nombre, codigo, frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        this._conteo=this._conteo+1;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} con el codigo ${this.codigo} y mi frase es ${this.frase}`);
    }

    

}

const alexisLapo = new Persona();
console.log(alexisLapo);

const ronaldo = new Persona('Ronaldo','01','Siuuuu');
console.log(ronaldo);

ronaldo.quienSoy();

alexisLapo.cedula;
alexisLapo.cedula = 'Alexis';
console.log(alexisLapo.cedula);
console.log(alexisLapo);

Persona.nombre2;
Persona.nombre;
