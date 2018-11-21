import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserInfoModel} from '../../model/userInfo.model';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formBuilder: FormBuilder;
  form: FormGroup;
  authService: AuthService;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.formBuilder = fb;
    this.authService = auth;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      userName: null,
      firstName: null,
      lastName: null,
      password: null,
      email: null,
      languages: null,
      nativeLanguage: null
    });
  }

  prepareSave() {
    const user = new UserInfoModel().deserialize(this.form.value);
    this.auth.register(user);
    return user;
  }

}
