import { createTodo } from './todo';
import { displayAllTodos } from './ui';

function attachTodoFormListener() {
    function processTodoFormData(event) {
        event.preventDefault();

        const projectTitle = document.querySelector('#project-title').value;
        const todoTitle = document.querySelector('#todo-title').value;
        const todoDescription = document.querySelector('#todo-description').value;
        const todoDueDate = document.querySelector('#todo-due-date').value;
        const todoNotes = document.querySelector('#todo-notes').value;
        const todoPriority = document.querySelector('input[name="priority"]:checked').value;
            
        new createTodo(projectTitle, todoTitle, todoDescription, todoDueDate, todoNotes, todoPriority);
        displayAllTodos();
    }  
    const submitTodoForm = document.querySelector('#create-todo-form');
    submitTodoForm.addEventListener('submit', processTodoFormData);
}

export { attachTodoFormListener };