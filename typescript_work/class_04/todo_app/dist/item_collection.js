"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollections = void 0;
const todo_items_1 = require("./todo_items");
class ItemCollections {
    //constructor
    constructor(collections = []) {
        this.collections = collections;
        //attributes
        this.next_id = 1;
    }
    //Method
    addTodo(task) {
        let item = new todo_items_1.TodoItems(this.next_id, task, false);
        this.next_id++;
        this.collections.push(item);
    }
    printLog() {
        this.collections.forEach((item) => item.printDetails());
    }
    taskDone(task_id) {
        let item = this.collections.find((item) => item.id === task_id);
        item.complete = true;
    }
}
exports.ItemCollections = ItemCollections;
