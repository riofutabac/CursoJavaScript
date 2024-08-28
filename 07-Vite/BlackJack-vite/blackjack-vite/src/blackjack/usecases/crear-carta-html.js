/**
 * Crea un elemento de imagen para representar una carta de blackjack.
 *
 * @param {string} carta - El código de la carta (por ejemplo, "2C").
 * @param {HTMLElement} contenedor - El contenedor donde se agregará la imagen.
 * @throws {Error} Si ocurre un error al crear o agregar el elemento.
 */
export const crearCartaHTML = (carta, contenedor) => {
    try {
      const img = document.createElement('img');
      img.classList.add('carta');
      img.src = `/assets/cartas/${carta}.png`;
      contenedor.appendChild(img);
    } catch (error) {
      console.error('Error al crear la carta HTML:', error);
      throw new Error('No se pudo crear la carta');
    }
  };