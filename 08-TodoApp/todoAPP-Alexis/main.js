import './style.css'
import { App } from './src/todos/app'
import * as todoStore from '/src/store/todo.store.js';


todoStore.initStore();

const app = App('#app');

app.displayTodos(todoStore);