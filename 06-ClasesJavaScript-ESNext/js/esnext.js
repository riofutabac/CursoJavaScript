class Rectangulo {
    base;
    altura;
    #area;
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }
}

const rectangulo = new Rectangulo(10,2);
this.#area=20;
console.log(rectangulo);
