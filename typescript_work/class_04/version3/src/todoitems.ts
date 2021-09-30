//Class TodoItems
export class TodoItems{
    //attributes
    //constructor
    public constructor(public id:number, public task:string, public complete:boolean){
        
    }

    //Method
    public printDetails(): void{
        console.log(`${this.id} \t ${this.task} \t ${this.complete}`)
    }
}