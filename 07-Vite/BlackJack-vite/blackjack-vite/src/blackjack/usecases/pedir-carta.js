import _ from 'underscore';

/**
 * Error personalizado para indicar que el mazo está vacío
 */
class MazoVacioError extends Error {
  constructor() {
    super('Se han agotado las cartas en el mazo');
  }
}

/**
 * Extrae una carta aleatoria del mazo.
 *
 * @param {string[]} deck - El mazo de cartas.
 * @returns {string} La carta extraída.
 * @throws {MazoVacioError} Si el mazo está vacío.
 */
export const pedirCarta = (deck) => {
  if (deck.length === 0) {
    throw new MazoVacioError();
  }

  const indiceAleatorio = _.random(0, deck.length - 1);
  return deck.splice(indiceAleatorio, 1)[0];
};