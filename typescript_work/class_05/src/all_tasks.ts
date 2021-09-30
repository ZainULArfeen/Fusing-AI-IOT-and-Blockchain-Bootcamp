import { Tasks } from "./tasks";

export class Collections{
    //attributes
    private next_id: number = 1;
    private itemMap = new Map<number, Tasks>();

    
    public constructor(public addTasks: Tasks[] = []){

    }

    public addTodo(task: string): void{
        let item: Tasks = new Tasks(this.next_id, task, false);
        this.next_id++;
        this.addTasks.push(item);
        this.itemMap.set(this.next_id, new Tasks(this.next_id, task));
    }

    public printAll(){
        this.addTasks.forEach((item: Tasks) => item.printDetails());
    }
}