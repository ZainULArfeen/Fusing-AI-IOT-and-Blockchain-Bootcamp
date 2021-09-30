export class Tasks{
    //construstor
    constructor(public taskId: number, public description: string, public done: boolean = true){

    }

    //method
    public printDetails(){
        console.log(`
        Task ID : ${this.taskId} \t Task Details : ${this.description} \t Completed : ${this.done}
        `);
    }
}