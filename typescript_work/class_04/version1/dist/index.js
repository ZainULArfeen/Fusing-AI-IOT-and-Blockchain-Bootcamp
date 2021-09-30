"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
const todoitems_1 = require("./todoitems");
let item1 = new todoitems_1.TodoItems(1, "Mangoes", false);
let item2 = new todoitems_1.TodoItems(2, "Potatoes", false);
item1.printDetails();
item2.printDetails();
