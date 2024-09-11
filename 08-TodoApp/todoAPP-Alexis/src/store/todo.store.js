import {Todo} from '../todos/model/todo.model'

const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos:[
        new Todo ('Piedra del alma'),
        new Todo('Piedra del infinito'),
    ],
    filter:Filters.All,
}

const initStore = () => {
    console.log('InitStore');
    console.log(state);
}

export default {
    initStore,
}