import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewCourseFormComponent {

  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: ['', Validators.email],
        phone: []
      }),
      topic: fb.array([])
    });
  }

  addTopic(topic) {}

  removeTopic(topic) {}

}
