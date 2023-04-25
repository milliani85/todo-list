import { createProject } from './project';

export class createTodo extends createProject {
    constructor(projectTitle, title, description, dueDate, notes, priority) {
        super(projectTitle);
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.notes = notes;
        this.priority = priority;
        this.isComplete = false;
    }
}