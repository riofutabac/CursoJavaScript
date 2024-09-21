import { Todo } from '../model/todo.model';
import { createTodoHtml } from './';

export const renderTodos = (elementId, todos = []) => {
    const element = document.querySelector(elementId);
    
    if (!element) throw new Error(`Element ${elementId} not found`);
    
    element.innerHTML = ''; // Limpia el contenido existente
    
    todos.forEach(todo => {
        element.append(createTodoHtml(todo));
    });
}