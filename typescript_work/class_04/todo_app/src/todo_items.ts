export class TodoItems{
    //attributes

    //constructor
    public constructor(public id:number, public task:string, public complete: boolean){

    }

    //Method
    public printDetails(){
        console.log(`${this.id} \t ${this.task} \t ${this.complete}`)
    }
}