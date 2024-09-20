import { v7 as uuidv7 } from 'uuid';
import { Todo } from '../todos/model/todo.model';

/**
 * @typedef {Object} Filters
 * @property {string} All - Filtro para todas las tareas
 * @property {string} Completed - Filtro para tareas completadas
 * @property {string} Pending - Filtro para tareas pendientes
 */

/**
 * Objeto que contiene los filtros disponibles para las tareas.
 * @type {Filters}
 */
const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
};

/**
 * @typedef {Object} State
 * @property {Todo[]} todos - Array de tareas
 * @property {string} filter - Filtro actual aplicado
 */

/**
 * Estado global de la aplicación.
 * @type {State}
 */
const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
    ],
    filter: Filters.All,
};

/**
 * Inicializa el store y muestra el estado actual en la consola.
 */
const initStore = () => {
    console.log('InitStore');
    console.log(state);
};

/**
 * Alterna el estado de completado de una tarea.
 * @param {string} id - ID de la tarea a alternar
 * @throws {Error} Si no se encuentra la tarea con el ID proporcionado
 */
const toggleTodo = (id) => {
    const todo = state.todos.find(todo => todo.id === id);
    if (todo) {
        todo.done = !todo.done;
    } else {
        throw new Error(`No se encontró ninguna tarea con el ID: ${id}`);
    }
};

/**
 * Obtiene las tareas según el filtro especificado.
 * @param {string} [filter=Filters.All] - Filtro a aplicar
 * @returns {Todo[]} Array de tareas filtradas
 * @throws {Error} Si se proporciona un filtro no válido
 */
const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Filtro no válido: ${filter}`);
    }
};

/**
 * Agrega una nueva tarea al estado.
 * @param {string} description - Descripción de la nueva tarea
 * @throws {Error} Si la descripción está vacía o no es una cadena válida
 */
const addTodo = (description) => {
    if (!description || typeof description !== 'string' || description.trim() === '') {
        throw new Error('La descripción de la tarea no puede estar vacía');
    }
    state.todos.push(new Todo(description.trim()));
};

/**
 * Elimina una tarea del estado por su ID.
 * @param {string} id - ID de la tarea a eliminar
 * @throws {Error} Si no se encuentra la tarea con el ID proporcionado
 */
const deleteTodo = (id) => {
    const initialLength = state.todos.length;
    state.todos = state.todos.filter(todo => todo.id !== id);
    if (state.todos.length === initialLength) {
        throw new Error(`No se encontró ninguna tarea con el ID: ${id}`);
    }
};

/**
 * Elimina todas las tareas completadas.
 * @returns {number} Número de tareas eliminadas
 */
const deleteCompleted = () => {
    const initialLength = state.todos.length;
    state.todos = state.todos.filter(todo => !todo.done);
    return initialLength - state.todos.length;
};

/**
 * Establece el filtro actual.
 * @param {string} filter - Filtro a aplicar
 * @throws {Error} Si se proporciona un filtro no válido
 */
const setFilter = (filter) => {
    if (Object.values(Filters).includes(filter)) {
        state.filter = filter;
    } else {
        throw new Error(`Filtro no válido: ${filter}`);
    }
};

/**
 * Obtiene el filtro actual.
 * @returns {string} El filtro actual
 */
const getCurrentFilter = () => {
    return state.filter;
};

export {
    Filters,
    initStore,
    toggleTodo,
    getTodos,
    addTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
};