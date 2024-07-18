# Juego de Blackjack en JavaScript

Este repositorio contiene una implementación del juego de Blackjack en JavaScript utilizando el Patrón de Módulo. Este patrón de diseño permite encapsular el código, haciéndolo privado e inaccesible desde el exterior, evitando así el acceso no autorizado a variables y funciones.

## Tabla de Contenidos

1. [Resumen](#resumen)
2. [Patrón de Módulo](#patrón-de-módulo)
3. [Modo Estricto](#modo-estricto)
4. [Implementación del Juego](#implementación-del-juego)
5. [Configuración](#configuración)
6. [Uso](#uso)

## Resumen

El Patrón de Módulo es uno de los patrones de diseño más conocidos en JavaScript. Permite encapsular el código dentro de un contenedor privado, asegurando que el código externo no pueda acceder directamente a sus variables y funciones.

## Patrón de Módulo

En JavaScript, podemos crear funciones anónimas que no tienen una referencia por nombre, creando un nuevo ámbito. Estas funciones deben estar encerradas entre paréntesis y se llaman inmediatamente al ser creadas. Esto se conoce como una Expresión de Función Invocada Inmediatamente (IIFE).

### Ejemplo de una IIFE:

```javascript
(function() {
    // Código aquí
})();

(() => {
    // Código aquí
})();
```

## Modo Estricto

La directiva `use strict` le dice a JavaScript que use el modo estricto, lo cual ayuda a escribir código más limpio al lanzar errores para ciertas acciones.

```javascript
(() => {
    'use strict';
    // Tu código aquí
})();
```

## Implementación del Juego

El siguiente código demuestra la implementación de un juego de Blackjack utilizando el Patrón de Módulo y el Modo Estricto. El juego incluye funcionalidades para crear un mazo, repartir cartas, calcular puntos y determinar el ganador.

```javascript
(() => {
    'use strict';

    // Módulo del juego
    const BlackjackGame = (() => {
        const TIPOS_CARTAS = ['C', 'D', 'H', 'S'];
        const CARTAS_ESPECIALES = ['J', 'Q', 'K', 'A'];
        const PUNTOS_MAXIMOS = 21;
        const PUNTOS_CRUPIER_MINIMOS = 17;

        let deck = [];
        let jugadores = [];

        // Clase Jugador
        class Jugador {
            constructor(nombre, elementoPuntos, elementoCartas) {
                this.nombre = nombre;
                this.puntos = 0;
                this.elementoPuntos = elementoPuntos;
                this.elementoCartas = elementoCartas;
            }

            agregarCarta(carta) {
                this.puntos += valorCarta(carta);
                this.actualizarPuntos();
                this.mostrarCarta(carta);
            }

            actualizarPuntos() {
                this.elementoPuntos.innerText = this.puntos;
            }

            mostrarCarta(carta) {
                const imgCarta = document.createElement('img');
                imgCarta.classList.add('carta');
                imgCarta.src = `/05-PatronModulo-optimizaciones/JuegoMejorado/assets/cartas/${carta}.png`;
                this.elementoCartas.append(imgCarta);
            }

            reiniciar() {
                this.puntos = 0;
                this.actualizarPuntos();
                this.elementoCartas.innerHTML = '';
            }
        }

        // Funciones del juego
        const crearDeck = () => {
            deck = [];
            for (let i = 2; i <= 10; i++) {
                for (let tipo of TIPOS_CARTAS) {
                    deck.push(i + tipo);
                }
            }
            for (let carta of CARTAS_ESPECIALES) {
                for (let tipo of TIPOS_CARTAS) {
                    deck.push(carta + tipo);
                }
            }
            return _.shuffle(deck);
        };

        const pedirCarta = () => {
            if (deck.length === 0) {
                throw 'No hay cartas en el mazo';
            }
            return deck.pop();
        };

        const valorCarta = (carta) => {
            const valor = carta.substring(0, carta.length - 1);
            return (isNaN(valor)) ?
                (valor === 'A') ? 11 : 10
                : parseInt(valor);
        };

        const determinarGanador = () => {
            const [jugador, crupier] = jugadores;
            let mensaje;

            if (jugador.puntos > PUNTOS_MAXIMOS) {
                mensaje = '¡Te has pasado! Crupier gana.';
            } else if (crupier.puntos > PUNTOS_MAXIMOS) {
                mensaje = '¡Crupier se ha pasado! ¡Ganaste!';
            } else if (jugador.puntos > crupier.puntos) {
                mensaje = '¡Felicidades! Has ganado.';
            } else if (jugador.puntos < crupier.puntos) {
                mensaje = 'Crupier gana. ¡Mejor suerte la próxima!';
            } else {
                mensaje = '¡Empate!';
            }

            mostrarResultado(mensaje);
        };

        const mostrarResultado = (mensaje) => {
            const resultadoDiv = document.getElementById('resultado');
            if (resultadoDiv) {
                resultadoDiv.textContent = mensaje;
                resultadoDiv.style.display = 'block';
            } else {
                console.error('Elemento de resultado no encontrado');
            }
        };

        const turnoCrupier = () => {
            const [jugador, crupier] = jugadores;
            while (crupier.puntos < PUNTOS_CRUPIER_MINIMOS && crupier.puntos < jugador.puntos) {
                crupier.agregarCarta(pedirCarta());
            }
            determinarGanador();
        };

        const turnoInicial = () => {
            jugadores.forEach(jugador => jugador.agregarCarta(pedirCarta()));
        };

        // API pública
        return {
            iniciarJuego: (elementosJugador, elementosCrupier) => {
                deck = crearDeck();
                jugadores = [
                    new Jugador('Jugador', elementosJugador.puntos, elementosJugador.cartas),
                    new Jugador('Crupier', elementosCrupier.puntos, elementosCrupier.cartas)
                ];
                jugadores.forEach(jugador => jugador.reiniciar());
                document.getElementById('resultado').style.display = 'none';
                setTimeout(turnoInicial, 500);
            },
            pedirCarta: () => {
                const [jugador] = jugadores;
                jugador.agregarCarta(pedirCarta());
                if (jugador.puntos >= PUNTOS_MAXIMOS) {
                    return false;
                }
                return true;
            },
            plantarse: turnoCrupier
        };
    })();

    // Controlador de la interfaz
    const UIController = (() => {
        const DOMStrings = {
            btnPedir: '#pedir-carta',
            btnPlantarse: '#plantarse',
            btnNuevaPartida: '#nueva-partida',
            totalJugador: '#total-jugador',
            totalCrupier: '#total-crupier',
            cartasJugador: '#cartas-jugador',
            cartasCrupier: '#cartas-crupier'
        };

        const getElement = (id) => document.querySelector(id);

        return {
            getDOMStrings: () => DOMStrings,
            getElements: () => ({
                btnPedir: getElement(DOMStrings.btnPedir),
                btnPlantarse: getElement(DOMStrings.btnPlantarse),
                btnNuevaPartida: getElement(DOMStrings.btnNuevaPartida)
            }),
            getJugadorElements: () => ({
                puntos: getElement(DOMStrings.totalJugador),
                cartas: getElement(DOMStrings.cartasJugador)
            }),
            getCrupierElements: () => ({
                puntos: getElement(DOMStrings.totalCrupier),
                cartas: getElement(DOMStrings.cartasCrupier)
            }),
            toggleButtons: (pedir, plantarse) => {
                getElement(DOMStrings.btnPedir).disabled = !pedir;
                getElement(DOMStrings.btnPlantarse).disabled = !plantarse;
            }
        };
    })();

    // Controlador principal
    const controller = ((game, UI) => {
        const setupEventListeners = () => {
            const DOM = UI.getElements();

            DOM.btnPedir.addEventListener('click', () => {
                if (!game.pedirCarta()) {
                    UI.toggleButtons(false, false);
                    game.plantarse();
                }
            });

            DOM.btnPlantarse.addEventListener('click', () => {
                UI.toggleButtons(false, false);
                game.plantarse();
            });

            DOM.btnNuevaPartida.addEventListener('click', iniciarNuevaPartida);
        };

        const iniciarNuevaPartida = () => {
            game.iniciarJuego(UI.getJugadorElements(), UI.getCrupierElements());
            UI.toggleButtons(true, true);
        };

        return {
            init: () => {
                console.log('Aplicación iniciada');
                setupEventListeners();
                iniciarNuevaPartida();
            }
        };
    })(BlackjackGame, UIController);

    controller.init();
})();
```

## Configuración

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener un navegador moderno que soporte la sintaxis y características de ES6.
3. Abre el archivo `index.html` en tu navegador para iniciar el juego.

## Uso

- Haz clic en **Pedir Carta** para sacar una carta.
- Haz clic en **Plant

arse** para dejar de sacar cartas y dejar que el crupier tome su turno.
- Haz clic en **Nueva Partida** para comenzar un nuevo juego.

¡Disfruta jugando al Blackjack y entendiendo el Patrón de Módulo en JavaScript!