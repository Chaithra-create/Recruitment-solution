import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
form:any = {
  name: null,
contactNumber:null,
company:null,
designation:null,
email:null,
city:null
}

submitted:boolean = false;

onSubmit(){
  const {name,contactNumber,email,company,designation,city} = this.form;
    this.submitted = true;
}


}
