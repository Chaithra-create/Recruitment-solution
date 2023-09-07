import { Component } from '@angular/core';

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
}
