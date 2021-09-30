"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collections = void 0;
const tasks_1 = require("./tasks");
class Collections {
    constructor(addTasks = []) {
        this.addTasks = addTasks;
        //attributes
        this.next_id = 1;
        this.itemMap = new Map();
    }
    addTodo(task) {
        let item = new tasks_1.Tasks(this.next_id, task, false);
        this.next_id++;
        this.addTasks.push(item);
        this.itemMap.set(this.next_id, new tasks_1.Tasks(this.next_id, task));
    }
    printAll() {
        this.addTasks.forEach((item) => item.printDetails());
    }
}
exports.Collections = Collections;
