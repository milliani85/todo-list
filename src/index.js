import { displayTodoForm, displayProjectForm, mainListButton } from "./ui";
import { attachTodoFormListener, attachProjectFormListener } from "./form-handling";

displayProjectForm();
displayTodoForm();
mainListButton();

attachTodoFormListener();
attachProjectFormListener();


