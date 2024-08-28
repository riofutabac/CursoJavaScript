import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { crearCartaHTML } from "./crear-carta-html";

/**
 * Simula el turno del crupier en una partida de blackjack.
 *
 * @param {Array} deck - El mazo de cartas.
 * @param {HTMLElement} totalCrupier - El elemento HTML donde se muestra la puntuación del crupier.
 * @param {HTMLElement} divsCartasCrupier - El contenedor donde se muestran las cartas del crupier.
 * @param {number} puntosJugador - La puntuación del jugador.
 */
export const turnoCrupier = (deck, totalCrupier, divsCartasCrupier, puntosJugador,puntosCrupier) => {
  try {
    while (puntosCrupier < 17 && puntosCrupier < puntosJugador) {
      const carta = pedirCarta(deck);
      puntosCrupier += valorCarta(carta);
      totalCrupier.textContent = puntosCrupier;
      crearCartaHTML(carta, divsCartasCrupier);
    }

    setTimeout(() => {
      determinarGanador(puntosJugador, puntosCrupier);
    }, 100);
  } catch (error) {
    console.error('Error durante el turno del crupier:', error);
  }
};

/**
 * Determina el ganador de la partida de blackjack y muestra el resultado.
 *
 * @param {number} puntosJugador - La puntuación del jugador.
 * @param {number} puntosCrupier - La puntuación del crupier.
 */
const determinarGanador = (puntosJugador, puntosCrupier) => {
  let mensaje;

  if (puntosJugador > 21) {
    mensaje = '¡Te has pasado! Crupier gana.';
  } else if (puntosCrupier > 21) {
    mensaje = '¡Crupier se ha pasado! ¡Ganaste!';
  } else if (puntosJugador > puntosCrupier) {
    mensaje = '¡Felicidades! Has ganado.';
  } else if (puntosJugador < puntosCrupier) {
    mensaje = 'Crupier gana. ¡Mejor suerte la próxima!';
  } else {
    mensaje = '¡Empate!';
  }

  mostrarResultado(mensaje);
};

/**
 * Muestra el resultado de la partida en la interfaz.
 *
 * @param {string} mensaje - El mensaje a mostrar.
 */
const mostrarResultado = (mensaje) => {
  const resultadoDiv = document.getElementById('resultado');
  if (resultadoDiv) {
    resultadoDiv.textContent = mensaje;
    resultadoDiv.style.display = 'block';
  } else {
    console.error('Elemento de resultado no encontrado');
  }
};