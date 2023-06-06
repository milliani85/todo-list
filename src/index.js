import { displayTodoForm, displayProjectForm } from "./ui";
import { attachTodoFormListener } from "./form-handling";
import { attachProjectFormListener } from "./form-handling";

displayProjectForm();
displayTodoForm();

attachTodoFormListener();
attachProjectFormListener();


