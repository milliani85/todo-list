import { createProject } from './project';

// Define and export a class named createTodo that extends the createProject class
export class createTodo extends createProject {
    constructor(projectTitle, title, description, dueDate, notes, priority) {
         // Call the constructor of the createProject class and pass the projectTitle argument
        super(projectTitle);
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.notes = notes;
        this.priority = priority;
        this.isComplete = false;

        // Check if the property 'todos' doesn't exist for the createTodo class
        if (!this.constructor.todos) {
            this.constructor.todos = [];
        }
        // Add the current createTodo instance to the 'todos' array
        this.constructor.todos.push(this);
    }

    // Static method that returns an array of all createTodo instances
    static ArrayOfAllTodos() {
        return this.todos;
    }
}