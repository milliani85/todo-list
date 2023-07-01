class createTodo {
    static todos = [];
    static nextTodoId = 1;
  
  constructor(todoProject, title, description, dueDate, notes, priority) {
        this.todoId = createTodo.nextTodoId++;
        this.todoProject = todoProject;
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.notes = notes;
        this.priority = priority;
        this.isComplete = false;

        // Add the current createTodo instance to the 'todos' array
    this.constructor.todos.push(this);
    console.log(this.todoId);
    }
}

export { createTodo };