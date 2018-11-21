import {Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AuthService} from '../../core/auth.service';
import {Router} from '@angular/router';
import {TokenStorage} from '../../core/token-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username = '';
  private password = '';
  errorMessage = '';
  form: FormGroup;
  formBuilder: FormBuilder;
  authService: AuthService;

  sub: Subscription = null;

  constructor(private fb: FormBuilder, private auth: AuthService, private tokenStorage: TokenStorage,
              private router: Router) {
     this.formBuilder = fb;
     this.authService = auth;
  }

  ngOnInit() {
    console.log('calling ngOnInit...');
    this.form = this.formBuilder.group(
      {username:  [this.username],
      password: [this.password]});
  }

  submit() {
    this.authService.attemptAuth(this.form.value.username, this.form.value.password).subscribe(data => {
      this.tokenStorage.save(data.token);
      this.router.navigate(['home']);
    });
  }

}
