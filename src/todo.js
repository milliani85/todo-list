export class createTodo {
    constructor(title, description, dueDate, notes, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.notes = notes;
        this.priority = priority;
        this.isComplete = false;
    }

    toggleCompletion() {
        if (this.isComplete) {
            this.isComplete = false;
        } else {
            this.isComplete = true;
        }
    }
}

