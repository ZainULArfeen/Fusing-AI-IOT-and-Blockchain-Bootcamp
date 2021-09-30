"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
class Tasks {
    //construstor
    constructor(taskId, description, done = true) {
        this.taskId = taskId;
        this.description = description;
        this.done = done;
    }
    //method
    printDetails() {
        console.log(`
        Task ID : ${this.taskId} \t Task Details : ${this.description} \t Completed : ${this.done}
        `);
    }
}
exports.Tasks = Tasks;
