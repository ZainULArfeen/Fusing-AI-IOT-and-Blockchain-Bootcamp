var id: number = 1;
var s_name: string = "zain";
var condition: boolean = true;

function uniDetails( id: number, s_name: string, condition: boolean): void{
    id = this.id;
    s_name = this.s_name;
    condition = this.condition;
}

function printDetails(){
    console.log(`${id} \n ${s_name} \n ${condition}`);
}

uniDetails(1645, "zain", true);
printDetails()