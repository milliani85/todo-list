import { format } from 'date-fns';

function displayTodo(todo) {
    const todoContainer = document.querySelector('.todo-container');

    const todoDueDate = document.createElement('time');
    todoDueDate.classList.add('todo-due-date');
    todoDueDate.setAttribute('datetime', todo.dueDate.toISOString());
    todoDueDate.innerHTML = format(todo.dueDate, 'EEE d MMM');
    todoContainer.appendChild(todoDueDate);

    const isComplete = document.createElement('h2');
    isComplete.classList.add('todo-is-complete');
    isComplete.textContent = todo.isComplete;
    todoContainer.appendChild(isComplete);

    const todoTitle = document.createElement('h2');
    todoTitle.classList.add('todo-title');
    todoTitle.textContent = todo.title;
    todoContainer.appendChild(todoTitle);

    const todoDescription = document.createElement('p');
    todoDescription.classList.add('todo-description');
    todoDescription.textContent = todo.description;
    todoContainer.appendChild(todoDescription);

    const priority = document.createElement('h2');
    priority.classList.add('todo-priority');
    priority.textContent = todo.priority;
    todoContainer.appendChild(priority);

    // const todoNotes = document.createElement('p');
    // todoNotes.classList.add('todo-notes');
    // todoNotes.textContent = todo.notes;
    // todoContainer.appendChild(todoNotes);

     // const todoProject = document.createElement('h1');
    // todoProject.classList.add('todo-project');
    // todoProject.textContent = todo.projectTitle;
    // todoContainer.appendChild(todoProject);
    
}

export { displayTodo };