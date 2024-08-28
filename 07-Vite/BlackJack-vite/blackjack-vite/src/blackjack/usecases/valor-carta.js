/**
 * Calcula el valor numérico de una carta de un mazo estándar.
 *
 * @param {string} carta - La representación de la carta (ej: "AS", "2C").
 * @returns {number} El valor numérico de la carta.
 */

export const valorCarta = (carta) => {
    const valores = {
      'A': 11,
      'J': 10,
      'Q': 10,
      'K': 10
    };
  
    const valorCarta = carta.substring(0, carta.length - 1);
  
    return valores[valorCarta] || parseInt(valorCarta, 10);
  };