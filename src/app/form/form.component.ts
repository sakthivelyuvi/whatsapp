import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 
 
  

countries=[
  {id:'1',name:'India'},
  {id:'2',name:'USA'},
  {id:'3',name:'UK'}

]
onAction(form:NgForm):void {
  console.log(form)
}

}
class countries {
  id!:number;
  name!:string;

 }
 

