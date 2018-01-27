import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactFormComponent {

  contactMethods = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Phone'},
    { id: 3, name: 'Fax'},
  ]

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
    
  }
  

}
