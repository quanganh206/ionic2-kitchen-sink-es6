import {Page, NavController} from 'ionic-angular';
import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl } from 'angular2/common';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/login/login.html',
  providers: [Validators],
  directives: [FORM_DIRECTIVES]
})
export class LoginPage {
  static get parameters() {
    return [[NavController], [FormBuilder]];
  }

  constructor(nav, fb, validators) {
    this.nav = nav;
    this.authForm = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(8), this.checkFirstCharacterValidator])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8), this.checkFirstCharacterValidator])]
    });
    this.username = this.authForm.controls['username'];
    this.password = this.authForm.controls['password'];
  }
  onSubmit(value) {
    if (this.authForm.valid) {
      console.log('Submitted value: ', value);
    }
  }
  checkFirstCharacterValidator(control) {
    if (control.value.match(/^\d/)) {
      return { checkFirstCharacterValidator: true };
    }
  }
}
