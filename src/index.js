import { createProject } from "./project";
import { createTodo } from "./todo";
import { displayTodo } from "./ui";

const todo1 = new createTodo('Complete course', 'Complete module', 'Occaecat cupidatat reprehenderit enim et incididunt nostrud qui anim.', '2023-04-30', 'kokookkokok', 'High');
console.log(todo1);
todo1.toggleCompletion();
console.log(todo1);

todo1.projectTitle = 'new';
console.log(todo1);

const project1 = new createProject('Hello', 12032021);
console.log(project1);


project1.addTodoToProject(todo1);
console.log(project1)

todo1.projectTitle = 'Hello';

project1.addTodoToProject(todo1);
console.log(project1)
console.table(project1.projectTodoList);

displayTodo(todo1);
