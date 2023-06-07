import { createTodo } from './todo';
import { displayAllTodos, displayAllProjects } from './ui';
import { createProject } from './project';

function attachTodoFormListener() {
    function processTodoFormData(event) {
        event.preventDefault();

        const projectTitle = document.querySelector('#todo-project-title').value;
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

function attachProjectFormListener() {
    function processProjectFormData(event) {
        event.preventDefault();

        const projectTitle = document.querySelector('#project-title').value;
        const projectDueDate = document.querySelector('#project-due-date').value;

        new createProject(projectTitle, projectDueDate);
        console.log(createProject.projects);
        displayAllProjects();
    }
    const submitProjectForm = document.querySelector('#create-project-form');
    submitProjectForm.addEventListener('submit', processProjectFormData);
}


export { attachTodoFormListener, attachProjectFormListener };