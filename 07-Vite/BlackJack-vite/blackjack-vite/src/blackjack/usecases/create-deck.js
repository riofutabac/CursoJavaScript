import _ from 'underscore';

/**
 * Crea un mazo de cartas barajado.
 *
 * Esta función genera un mazo de cartas a partir de los tipos de cartas y las cartas mayores especificados. 
 * Cada carta se representa como una cadena que combina un valor numérico (2-10 o una carta mayor) y un tipo.
 *
 * @param {string[]} tiposCartas - Un arreglo de cadenas que representan los tipos de cartas posibles (e.g., 'C', 'D', 'T', 'P').
 * @param {string[]} cartasMayor - Un arreglo de cadenas que representan las cartas mayores (e.g., 'J', 'Q', 'K', 'A').
 * @returns {string[]} - Un arreglo de cadenas que representa las cartas del mazo barajado.
 *
 * @throws {Error} Si no se proporciona un arreglo de tipos de cartas.
 */
export const crearDeck = (tiposCartas, cartasMayor) => {

    if (!Array.isArray(tiposCartas) || !Array.isArray(cartasMayor)) {
        throw new InvalidCardTypeError('Los tipos de cartas y las cartas mayores deben ser arreglos');
    }
    if (!tiposCartas.length || !cartasMayor.length) {
        throw new EmptyDeckError('Los arreglos de tipos de cartas y cartas mayores no pueden estar vacíos');
    }
    if (!tiposCartas.every(tipo => typeof tipo === 'string') || !cartasMayor.every(carta => typeof carta === 'string')) {
        throw new InvalidCardTypeError('Todos los elementos de los arreglos deben ser cadenas');
    }

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCartas) {
            deck.push(i + tipo);
        }
    }

    for (let cartaMayor of cartasMayor) {
        for (let tipo of tiposCartas) {
            deck.push(cartaMayor + tipo);
        }
    }

    deck = _.shuffle(deck);

    return deck;
};