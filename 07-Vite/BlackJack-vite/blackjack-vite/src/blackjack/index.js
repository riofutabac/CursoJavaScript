import _ from 'underscore';

import { crearDeck,pedirCarta, valorCarta, turnoCrupier, crearCartaHTML } from './usecases/index';

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

let puntosJugador=0, puntosCrupier=0;



const totalCrupier = document.querySelector('#total-crupier');
const divsCartasCrupier = document.querySelector('#cartas-crupier');

//Referencias de html /id="pedir-carta"/ id="plantarse"/  id="nueva-partida"/ id="total-jugador" / id="cartas-jugador"
const btnPedir = document.querySelector('#pedir-carta');
const btnPlantarse = document.querySelector('#plantarse');
const btnNuevaPartida = document.querySelector('#nueva-partida');
const totalJugador = document.querySelector('#total-jugador');
const divsCartasJugador =  document.querySelector('#cartas-jugador');






// Crea la baraja / bloque 1
deck = crearDeck(tiposCartas, cartasMayor);
console.log(deck);
console.log('Cartas totales:',deck.length);



//Eventos 
btnPedir.addEventListener('click', function(){
    const carta = pedirCarta(deck);
    puntosJugador= puntosJugador + valorCarta(carta);
    console.log({puntosJugador});
    totalJugador.innerText = puntosJugador;

    crearCartaHTML(carta, divsCartasJugador);

    if(puntosJugador > 21){
        console.log('Perdiste');
        btnPedir.disabled = true;
        btnPlantarse.disabled =  true;
        turnoCrupier(deck,totalCrupier,divsCartasCrupier, puntosJugador,puntosCrupier);
    } else if (puntosJugador === 21) {
        console.warn('Llegaste a 21');
        btnPedir.disabled = true;
    }
});

btnPlantarse.addEventListener('click', function(){
    btnPedir.disabled = true;
    btnPlantarse.disabled =  true;
    turnoCrupier(deck,totalCrupier,divsCartasCrupier,puntosJugador,puntosCrupier);
});

//bloque 2
btnNuevaPartida.addEventListener('click', () => {
    console.clear();
    deck = crearDeck( tiposCartas, cartasMayor);
    console.log ('Baraja dando click '+deck)
    puntosJugador = 0;
    puntosCrupier = 0;
    totalJugador.innerText = 0;
    totalCrupier.innerText = 0;
    divsCartasJugador.innerHTML = '';
    divsCartasCrupier.innerHTML = '';
    btnPedir.disabled = false;
    btnPlantarse.disabled = false;
});



