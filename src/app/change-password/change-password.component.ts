import { PasswordValidators } from './password.validators';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChangePasswordComponent {

  form: FormGroup;

  // form = new FormGroup({
  //   password: new FormControl('', Validators.required, [PasswordValidators.isWrong]),
  //   newPassword: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3)
  //   ]),
  //   repeatPassword: new FormControl('', Validators.required)
  // }, PasswordValidators.passwordsAreMatch);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      password: [
        '',
        Validators.required,
        PasswordValidators.isWrong
      ],
      newPassword: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordsAreMatch
    })
  }

  get password() {
    return this.form.get('password');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get repeatPassword() {
    return this.form.get('repeatPassword');
  }

}
