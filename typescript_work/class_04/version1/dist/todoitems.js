"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItems = void 0;
//Class TodoItems
class TodoItems {
    //constructor
    constructor(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    //Method
    printDetails() {
        console.log(`${this.id} \t ${this.task} \t ${this.complete}`);
    }
}
exports.TodoItems = TodoItems;
