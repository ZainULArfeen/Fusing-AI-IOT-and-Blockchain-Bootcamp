console.clear();

import { TodoItems } from "./todoitems";

let item1: TodoItems = new TodoItems(1, "Mangoes", false);
let item2: TodoItems = new TodoItems(2, "Potatoes", false);

item1.printDetails();
item2.printDetails();