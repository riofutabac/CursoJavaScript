

# Apuntes de JavaScript - Desarrollo Moderno

## Temas de la Sección

Esta sección es crucial para comprender las herramientas fundamentales en el desarrollo de aplicaciones modernas con JavaScript. Abordaremos los siguientes temas:

- ¿Qué son los bundlers?
- ¿Qué es Webpack y TurboPack?
- ¿Qué es Vite?
- ¿Por qué necesitamos utilizar estas herramientas?

Además, trabajaremos con Vite en la aplicación de BlackJack.

## ES6: El Estándar Actual

ES6 es la versión más reciente y ampliamente adoptada de JavaScript, estableciendo el estándar para el desarrollo moderno.

## Bundlers: Empaquetadores de Código

Los bundlers (empaquetadores) son herramientas que nos permiten desarrollar aplicaciones JavaScript en módulos. Su función principal es combinar todos los archivos de nuestro proyecto y prepararlos para producción. Al pasar los archivos por el bundler, obtenemos un programa optimizado para ser ejecutado en cualquier entorno.

### ¿Qué es Webpack?

Webpack ha sido el estándar de facto durante muchos años en el desarrollo de aplicaciones JavaScript. Su capacidad para manejar módulos y optimizar el código lo convirtió en una herramienta esencial en el desarrollo moderno.

### ¿Qué es Vite?

Vite es una herramienta moderna que supera a Webpack en términos de velocidad. Permite cambios de módulos en caliente, lo que acelera enormemente el desarrollo.

### ¿Qué es TurboPack?

TurboPack es otro bundler escrito en Rust, diseñado para ser utilizado con Next.js, un framework de React. Aunque no es tan popular aún, es una herramienta prometedora.

## Crear un Proyecto con Vite

Para iniciar un proyecto con Vite, utilizamos el siguiente comando:

```bash
npm create vite
```

Vite permite trabajar con varios frameworks, o incluso con un proyecto Vanilla (sin frameworks adicionales).

### Instalación de Dependencias

Para instalar las dependencias de un proyecto, usamos:

```bash
npm install
```

Existen dos tipos de dependencias:

- **Dependencies**: Son las que necesitamos en producción.
- **DevDependencies**: Son necesarias solo durante el desarrollo del proyecto.

Ejemplo de un archivo `package.json` con Vite:

```json
{
  "name": "vite-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^5.4.1"
  }
}
```

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Este comando ejecuta el script `dev` definido en el `package.json`.

### Proceso de Build

El comando `npm run build` toma el código fuente y lo transforma en un formato optimizado para ser usado en cualquier navegador. Este proceso genera archivos listos para ser desplegados en producción.

## Despliegue de Aplicaciones con Netlify

Netlify es una plataforma que permite desplegar aplicaciones estáticas que no requieren código de backend.

### Manejo de Recursos Estáticos

Es importante organizar los recursos estáticos (assets) en una carpeta `public`. Esto facilita su acceso y evita problemas al importar archivos durante el proceso de build.

## Modularización y Exportación

En JavaScript, es buena práctica modularizar las funciones en diferentes archivos para asignar responsabilidades claras. Para importar y exportar módulos:

- **Importar un módulo:**

```javascript
import { crearDeck as crearNuevoDeck } from './usecases/create-deck';
```

- **Exportar un módulo:**

```javascript
export function crearDeck() {
  // código...
}
```

También se puede hacer una exportación por defecto:

```javascript
export default function crearDeck() {
  // código...
}
```

Es importante recordar que solo se puede tener una exportación por defecto por archivo.

## Documentación del Código

Para documentar funciones, se pueden usar comentarios `JSDoc`:

```javascript
/**
 * Crea un mazo de cartas barajado.
 *
 * @param {string[]} tiposCartas - Tipos de cartas posibles (e.g., 'C', 'D', 'T', 'P').
 * @param {string[]} cartasMayor - Cartas mayores (e.g., 'J', 'Q', 'K', 'A').
 * @returns {string[]} - Mazo barajado.
 *
 * @throws {Error} Si no se proporciona un arreglo de tipos de cartas.
 */
```

## Ejecución Secuencial y Eventos en JavaScript

JavaScript ejecuta el código de manera secuencial, línea por línea. Sin embargo, los eventos como clics en botones pueden interrumpir esta secuencia:

1. **Ejecución Secuencial:** Al cargar la página, se ejecuta todo el código desde arriba hacia abajo.
2. **Eventos como Interrupciones:** Un clic actúa como una interrupción, ejecutando el código asociado al evento y "pausando" el resto.
3. **Retorno a la Ejecución Normal:** Una vez que el código del evento termina, el JavaScript retoma la ejecución donde se quedó.

Es importante entender que los eventos no reinician la ejecución del programa desde el inicio, sino que continúan desde el punto de interrupción.

## Archivos de Barril

Un archivo de barril es un archivo `index.js` donde se agrupan todas las exportaciones. Esto permite hacer una única importación en otros archivos:

```javascript
import { crearDeck, pedirCarta, valorCarta } from './usecases/index';
```

El archivo `index.js` podría verse así:

```javascript
export { crearDeck } from './create-deck';
export { pedirCarta } from './pedir-carta';
export { valorCarta } from './valor-carta';
```

Esta modularización facilita el control y la organización del código en aplicaciones más grandes.


