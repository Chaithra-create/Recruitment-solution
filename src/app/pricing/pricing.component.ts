import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
myForm:any; 
message = '';
details='';
openForm() {
  this.myForm = document.getElementById('myForm');
  console.log(this.myForm);
  this.myForm.style.display="block";
}

sendMessage(){
  this.details="Message sent!";
  setTimeout(() => {
    this.closeForm()}
    ,1000)
}

closeForm(){
  this.myForm = document.getElementById('myForm');  
this.myForm.style.display="none";
this.message= '';
this.details = '';
}
}
