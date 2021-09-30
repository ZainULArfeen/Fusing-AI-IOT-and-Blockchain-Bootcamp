"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
const item_collection_1 = require("./item_collection");
let col1 = new item_collection_1.ItemCollections();
col1.addTodo("mangoes");
col1.addTodo("Grapes");
col1.taskDone(2);
col1.printLog();
