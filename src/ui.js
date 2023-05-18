import { format } from 'date-fns';

function displayTodo(todo) {
    const mainContainer = document.querySelector('.main-section');

    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
    mainContainer.appendChild(todoContainer);

    const upperContainer = document.createElement('div');
    upperContainer.classList.add('upper-container');
    todoContainer.appendChild(upperContainer);

    // Create a span element to represent the completion status of the todo
    const isComplete = document.createElement('span');
    isComplete.classList.add('todo-is-complete');
    isComplete.setAttribute('title', 'Click to complete');
    isComplete.addEventListener('click', () => {
        todoContainer.remove();
        });
    upperContainer.appendChild(isComplete);
    
    // Create a time element to display the due date of the todo
    const todoDueDate = document.createElement('time');
    todoDueDate.classList.add('todo-due-date');
    todoDueDate.setAttribute('datetime', todo.dueDate.toISOString());
    todoDueDate.innerHTML = format(todo.dueDate, 'EEE d MMM');
    upperContainer.appendChild(todoDueDate);
    
    // Create an h2 element to display the title of the todo
    const todoTitle = document.createElement('h2');
    todoTitle.classList.add('todo-title');
    todoTitle.textContent = todo.title;
    todoContainer.appendChild(todoTitle);
    
     // Create a paragraph element to display the description of the todo
    const todoDescription = document.createElement('p');
    todoDescription.classList.add('todo-description');
    todoDescription.textContent = todo.description;
    todoContainer.appendChild(todoDescription);
    
    // Function to apply priority color based on the value of the priority property
    function priorityColor() {
        if (todo.priority === 'High') {
            isComplete.classList.add('high-priority');
        } else if (todo.priority === 'Medium') {
            isComplete.classList.add('medium-priority');
        } else if (todo.priority === 'Low') {
            isComplete.classList.add('low-priority');
        }
    }

    priorityColor();

    // const priority = document.createElement('h2');
    // priority.classList.add('todo-priority');
    // priority.textContent = todo.priority;
    // todoContainer.appendChild(priority);

    // const todoNotes = document.createElement('p');
    // todoNotes.classList.add('todo-notes');
    // todoNotes.textContent = todo.notes;
    // todoContainer.appendChild(todoNotes);

     // const todoProject = document.createElement('h1');
    // todoProject.classList.add('todo-project');
    // todoProject.textContent = todo.projectTitle;
    // todoContainer.appendChild(todoProject);
    
}    

// Toggles todo form display on and off.
function displayTodoForm() {
    const createTodo = document.querySelector('.create-todo-container');
    const overlay = document.querySelector('.overlay');
    const formContainer = document.querySelector('.create-todo-form-container');

    createTodo.addEventListener('click', () => {
        formContainer.classList.toggle('form-hidden')
        overlay.classList.toggle('overlay-on')
    });
}

export { displayTodo, displayTodoForm };