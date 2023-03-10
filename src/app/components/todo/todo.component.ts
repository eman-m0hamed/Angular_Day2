import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
tasks:string[] = [];
taskValue:string = "";
error:string = "";

add(){
  if(!this.taskValue){
    this.error = "Task Can't be Empty";
  }
  else{
    this.tasks.push(this.taskValue);
    this.taskValue="";
  }

}

remove(taskIndex:number){

  this.tasks= this.tasks.filter((task,index)=>index!=taskIndex);

}

}
