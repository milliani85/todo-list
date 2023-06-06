export class createProject { 
    static projects = [];

    static arrayOfAllProjects() {
        return this.projects;
    }  

    constructor(projectTitle, dueDate) {
        this.projectTitle = projectTitle;
        this.dueDate = new Date(dueDate);
        this.projectTodoList = [];
        this.isComplete = false;

        this.constructor.projects.push(this);
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