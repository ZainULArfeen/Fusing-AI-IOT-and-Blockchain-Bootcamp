//Class TodoItems
export class TodoItems{
    //attributes
    public id : number;
    public task : string;
    public complete : boolean;

    //constructor
    public constructor(id:number, task:string, complete:boolean){
        this.id = id;
        this.task = task;
        this.complete = complete;
    }

    //Method
    public printDetails(): void{
        console.log(`${this.id} \t ${this.task} \t ${this.complete}`)
    }
}