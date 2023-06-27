import { format } from 'date-fns';
import { createTodo } from './todo';
import { createProject } from './project'

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
    upperContainer.appendChild(isComplete);
    isComplete.addEventListener('click', () => {
        removeTodo(todo, todoContainer);
    });
    
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
    expandTodo(todoContainer);

} 

function createExpandedTodo(expandedTodo, todo, todoOverlay) {
    expandedTodo.innerHTML = '';

    const todoProject = document.createElement('h1');
    todoProject.classList.add('todo-project');
    todoProject.textContent = todo.todoProject;
    expandedTodo.appendChild(todoProject);

    const todoDueDate = document.createElement('input');
    todoDueDate.classList.add('todo-due-date');
    todoDueDate.setAttribute('type', 'date');
    todoDueDate.value = todo.dueDate.toISOString().split('T')[0];
    expandedTodo.appendChild(todoDueDate);

    const todoTitle = document.createElement('h2');
    todoTitle.classList.add('todo-title');
    todoTitle.contentEditable = true;
    todoTitle.textContent = todo.title;
    expandedTodo.appendChild(todoTitle);

    const todoDescription = document.createElement('p');
    todoDescription.classList.add('todo-description');
    todoDescription.textContent = todo.description;
    expandedTodo.appendChild(todoDescription);

    const todoNotes = document.createElement('p');
    todoNotes.classList.add('todo-notes');
    todoNotes.textContent = todo.notes;
    expandedTodo.appendChild(todoNotes);

    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-button');
    submitButton.textContent = 'APPLY';
    expandedTodo.appendChild(submitButton);

    const previousTitle = todoTitle.textContent;

    submitButton.addEventListener('click', () => {
        const newTodoTitle = todoTitle.textContent.trim();
        
        createTodo.todos.forEach((todo) => {
            console.log(todo.title)
            console.log(todoTitle.textContent)

            if (todo.title === previousTitle) {
                todo.title = newTodoTitle;
                console.log(createTodo.todos)
            }
        });
        displayAllTodos();

        expandedTodo.classList.toggle('expanded-todo-hidden');
        todoOverlay.classList.toggle('overlay-on');    
    })
}

// Opens expanded todo
function expandTodo(todoContainer) {
    const todoOverlay = document.querySelector('#expanded-todo-overlay');
    const expandedTodo = document.querySelector('.expanded-todo');

    todoContainer.addEventListener('click', (event) => {
        event.stopPropagation();

        expandedTodo.classList.toggle('expanded-todo-hidden');
        todoOverlay.classList.toggle('overlay-on');
        const todoElement = event.target.closest('.todo-container');
        const todoTitle = todoElement.querySelector('.todo-title').textContent;
        
        createTodo.todos.forEach((todo) => {
            if (todo.title === todoTitle) {
                createExpandedTodo(expandedTodo, todo, todoOverlay)
            }
        })
    });

    todoOverlay.addEventListener('click', (event) => {
        event.stopPropagation();
        
        if(event.target.classList.contains('overlay')) {
            expandedTodo.classList.add('expanded-todo-hidden');
            todoOverlay.classList.toggle('overlay-on');
        }
    });
}

// Removes todo from display and the todos array
function removeTodo(todo, todoContainer) {
    const index = createTodo.todos.indexOf(todo);
    if (index !== -1) {
        createTodo.todos.splice(index, 1);
    }
    todoContainer.remove();
}

function clearTodos() {
  const todoContainers = document.querySelectorAll('.todo-container');

  todoContainers.forEach((container) => {
    container.remove();
  });
}


// Toggles todo form display on and off.
function displayTodoForm() {
    const createTodoButton = document.querySelector('.create-todo-container');
    const todoOverlay = document.querySelector('#todo-overlay');
    const formContainer = document.querySelector('.create-todo-form-container');
    const formSubmit = document.querySelector('#todo-form-submit')

    createTodoButton.addEventListener('click', () => {
        formContainer.classList.toggle('form-hidden')
        todoOverlay.classList.toggle('overlay-on')
    });

    todoOverlay.addEventListener('click', (event) => {
        if (event.target.classList.contains('overlay-on')) {
            formContainer.classList.add('form-hidden');
            todoOverlay.classList.toggle('overlay-on');
        }        
    });

    formSubmit.addEventListener('click', () => {
        formContainer.classList.add('form-hidden');
        todoOverlay.classList.toggle('overlay-on');
    })
}

// Toggles project form display on and off.
function displayProjectForm() {
    const createProjectButton = document.querySelector(".create-project-container");
    const projectOverlay = document.querySelector('#project-overlay');
    const formContainer = document.querySelector('.create-project-form-container');
    const formSubmit = document.querySelector('#project-form-submit');

    createProjectButton.addEventListener('click', () => {
        formContainer.classList.toggle('form-hidden')
        projectOverlay.classList.toggle('overlay-on')
    });

    projectOverlay.addEventListener('click', (event) => {
        if (event.target.classList.contains('overlay-on')) {
            formContainer.classList.add('form-hidden');
            projectOverlay.classList.toggle('overlay-on');            
        }        
    });

    formSubmit.addEventListener('click', () => {
        formContainer.classList.add('form-hidden');
        projectOverlay.classList.toggle('overlay-on');
    })
}

// Iterates through the todos array and calls displayTodo for each one.
function displayAllTodos() {
    clearTodos();

    createTodo.todos.forEach((todo) => {
        displayTodo(todo);
    });
}

function mainListButton() {
    const mainListButton = document.querySelector('.main-list-container');
    mainListButton.addEventListener('click', displayAllTodos)
}

// Displays projects on the side nav bar.
function displayProject(project) {
    const projectsContainer = document.querySelector('.all-projects-container');

    const projectList = document.createElement('li');
    projectList.classList.add('project-list');
    projectList.textContent = project.projectTitle;
    projectsContainer.appendChild(projectList);
}

// Adds projects to todo form projects selector.
function addProjectsTodoForm(project) {
    const projectTitleSelect = document.getElementById('todo-project-title');

    const option = document.createElement('option');
    option.value = project.projectTitle;
    option.textContent = project.projectTitle;
    projectTitleSelect.appendChild(option);
}

function attachProjectEventListeners() {
    const projectListItems = document.querySelectorAll('.project-list');
    projectListItems.forEach((project) => {
        project.addEventListener('click', (event) => {
            clearTodos();
            const selectedProject = event.target.innerText;

            const matchingTodos = createTodo.todos.filter((todo) => {
                return selectedProject === todo.todoProject
            })
            matchingTodos.forEach((todo) => {
                displayTodo(todo)
            })
        });        
    });
};

// Iterates through the projects array and calls displayProject and addProjectsTodoForm for each one.
function displayAllProjects() {
    const projectsContainer = document.querySelector('.all-projects-container');
    const projectTitleSelect = document.getElementById('todo-project-title');

    projectsContainer.innerHTML = '';
    projectTitleSelect.innerHTML = '';

    const blankOption = document.createElement('option');
    blankOption.value = '';
    blankOption.textContent = '';
    projectTitleSelect.appendChild(blankOption);

    createProject.projects.forEach((project) => {
        displayProject(project)
        addProjectsTodoForm(project)
    })

    attachProjectEventListeners()
}


export { displayTodo, displayTodoForm, displayAllTodos, displayProjectForm, displayAllProjects, mainListButton };