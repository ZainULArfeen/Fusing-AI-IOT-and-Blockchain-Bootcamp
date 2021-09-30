console.clear()

import { ItemCollections } from "./item_collection";

let col1 : ItemCollections = new ItemCollections();

col1.addTodo("mangoes");
col1.addTodo("Grapes");

col1.taskDone(2);

col1.printLog()