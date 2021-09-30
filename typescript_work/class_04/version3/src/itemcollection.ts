import { TodoItems } from "./todoitems";

export class ItemCollection{
    private next_id : number = 1;

    public constructor(public items: TodoItems[] = []){

    }

    public addTodo(task: string): void{
        let item:TodoItems = new TodoItems(this.next_id, task, false);
        this.next_id ++;
        this.items.push(item);
    }

    public logDetails(): void{
        this.items.forEach((item:TodoItems) => item.printDetails());
    }
}