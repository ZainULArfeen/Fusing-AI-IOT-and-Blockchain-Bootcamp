import { TodoItems } from "./todo_items";

export class ItemCollections{
    //attributes
    public next_id : number = 1;

    //constructor
    public constructor(public collections : TodoItems[] = []){

    }

    //Method
    public addTodo(task: string): void{
        let item : TodoItems = new TodoItems(this.next_id, task, false);
        this.next_id ++;
        this.collections.push(item)
    }

    public printLog(){
        this.collections.forEach((item: TodoItems) => item.printDetails());
    }

    public taskDone(task_id: number){
        let item: TodoItems = this.collections.find((item) => item.id === task_id);
        item.complete = true;
    }
}