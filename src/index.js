import { createProject } from "./project";
import { createTodo } from "./todo";
import { displayTodo, displayTodoForm } from "./ui";
import { attachTodoFormListener } from "./form-handling";

displayTodoForm();
attachTodoFormListener();

console.log(createTodo.todos);





// const todo1 = new createTodo('Complete course', 'Finish this study module', 'Finish module and upload to git. Once uploaded to git display on Odin site. Once uploaded to git display on Odin site. Once uploaded to git display on Odin site. Once uploaded to git display on Odin site. ', '2023-06-30', 'kokookkokok', 'High');
// const todo2 = new createTodo('Complete course', 'Learn Guitar', 'Practice finger style', '2023-07-30', 'kokookkokok', 'Medium');
// const todo3 = new createTodo('Complete course', 'Cut Grass', 'Cut grass in back garden', '2023-09-20', 'kokookkokok', 'Low');

// const project1 = new createProject('Hello', 12032021);
// project1.addTodoToProject(todo1);
// todo1.projectTitle = 'Hello';

// displayTodo(todo1);
// displayTodo(todo1);
// displayTodo(todo2);
// displayTodo(todo3);
// displayTodo(todo1);
// displayTodo(todo1);
// displayTodo(todo2);
// displayTodo(todo3);
// displayTodo(todo1);
// displayTodo(todo1);
// displayTodo(todo2);
