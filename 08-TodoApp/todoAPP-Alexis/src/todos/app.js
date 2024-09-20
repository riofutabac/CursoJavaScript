import html from './app.html?raw';

export const App = (elementId) => {

    const displayTodos = (todoStore) => {
        let list = document.querySelector('.todo-list');  
        let datos = todoStore.getTodos();
        list.innerHTML = '';  
        
        for (let i = 0; i < datos.length; i++) {

            let item = document.createElement("li");

            let vista = document.createElement("div");
            vista.classList.add("view");

            let toggle = document.createElement("input");
            toggle.classList.add('toggle');
            toggle.type = "checkbox";
            toggle.checked = datos[i].done; 

            let label = document.createElement("label");
            label.innerText = datos[i].description;

            let button = document.createElement("button");
            button.classList.add("destroy");

            vista.appendChild(toggle);
            vista.appendChild(label);
            vista.appendChild(button);
            item.appendChild(vista);
            list.appendChild(item);
        }
    };


    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })();

    return {
        displayTodos
    };
};
