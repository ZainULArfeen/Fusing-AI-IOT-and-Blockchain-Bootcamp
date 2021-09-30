"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const todoitems_1 = require("./todoitems");
class ItemCollection {
    constructor(items = []) {
        this.items = items;
        this.next_id = 1;
    }
    addTodo(task) {
        let item = new todoitems_1.TodoItems(this.next_id, task, false);
        this.next_id++;
        this.items.push(item);
    }
    logDetails() {
        this.items.forEach((item) => item.printDetails());
    }
    taskDone(taskid) {
        let item = this.items.find((item) => item.id === taskid);
        item.complete = true;
    }
}
exports.ItemCollection = ItemCollection;
