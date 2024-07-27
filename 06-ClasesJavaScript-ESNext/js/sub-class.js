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

class Heroe extends Persona{
    clan;
    constructor (nombre, codigo, frase,clan) {
        super(nombre,codigo,frase);
    }
}
const alexisLapo = new Heroe('alexis',1,1);

