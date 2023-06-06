import { createProject } from "./project";

class createTodo extends createProject {
    static todos = [];

      // Static method that returns an array of all createTodo instances
    // static arrayOfAllTodos() {
    //     return this.todos;
    // }    

    constructor(projectTitle, title, description, dueDate, notes, priority) {
        super(projectTitle);
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.notes = notes;
        this.priority = priority;
        this.isComplete = false;

        // Add the current createTodo instance to the 'todos' array
        this.constructor.todos.push(this);
    }
}

export { createTodo };