import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students:{ name:string, age:number|undefined}[]=[];
  studentName:string="";
  studentAge:number|undefined =undefined;
  nameError: string = "";
  ageError: string = "";

  add(){
    let flag:boolean=true;
    this.nameError="";
    this.ageError="";
    if(this.studentName == ""){
      this.nameError="Student name cane't be Empty";
      flag=false;
    }
    else if(!this.studentName.match(/^[a-zA-Z_\s\-]*$/)){
      this.nameError="Student name Must be only Characters";
      flag=false;
    }
    else if(this.studentName.length<=3){
      this.nameError="Student name Length must be more than Three Character";
      flag=false;
    }

    if(!this.studentAge){
      this.ageError="Student Age can't be Null or Zero Value";
      flag=false;
    }
    else if(!String(this.studentAge).match(/^[0-9]*$/)){
      this.ageError="Student Age Must be only number";
      flag=false;
    }
    else if(this.studentAge<=18){
      this.ageError="Student Age must be more than 18";
      flag=false;
    }
    if(flag){
      this.students.push({name: this.studentName, age: this.studentAge});
      this.studentName="";
      this.studentAge=undefined;
    }
  }
}
