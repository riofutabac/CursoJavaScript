/**
 * Juego de BlackJack
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let deck = [];

let cartaJugador;

const tiposCartas = ['C', 'D', 'H', 'S'];

const cartasMayor = ['J', 'Q', 'K', 'A'];


const crearDeck = () => {
    for(i = 2; i <= 10; i++){
        for(tipo of tiposCartas){
            deck.push(i + tipo);
        }

    }
    for(cartaMayor of cartasMayor){
        for(tipo of tiposCartas){
            deck.push(cartaMayor+tipo)
        }
    }
    deck = _.shuffle(deck); //crea nuestro deck barajeado
    return deck;
};


const pedirCarta = () => {
    if (deck.length === 0) {
        console.log('¡Se han agotado las cartas en el mazo!');
        return null; 
    }

    let cartasTotales = deck.length;
    console.log('Cartas totales:', cartasTotales);
    let numeroAleatorio = _.random(0, cartasTotales - 1);
    console.log('Índice aleatorio:', numeroAleatorio);
    
    // Extraemos la carta del deck
    const carta = deck.splice(numeroAleatorio, 1)[0]; 
    return carta;
}

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ? 
            (valor === 'A') ? 11 : 10
            : valor * 1;
}


// Crea la baraja 
deck = crearDeck();
console.log(deck);

cartaJugador = pedirCarta();
console.log('Carta extraída:', cartaJugador);
console.log('Cartas totales:',deck.length);
console.log('Valor de la carta:', valorCarta(cartaJugador));



