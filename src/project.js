export class createProject { 
    constructor(projectTitle, dueDate) {
        this.projectTitle = projectTitle;
        this.dueDate = dueDate;
        this.projectTodoList = [];
        this.isComplete = false;
    }

    toggleCompletion() {
        if (this.isComplete) {
            this.isComplete = false;
        } else {
            this.isComplete = true;
        }
    }

    addTodoToProject(todo) {
        if (todo.projectTitle === this.projectTitle) {
            this.projectTodoList.push(todo)
        }
    }
}