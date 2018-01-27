import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateCourseFormComponent {

  categories = [
    { id: 1, name: 'Frontend'},
    { id: 2, name: 'Backend'},
    { id: 3, name: 'Design'},
  ];

  log(data) {
    console.log(data);
  }

}
