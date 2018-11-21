///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Inject, OnInit} from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {TokenStorage} from '../../core/token-storage';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

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
  description: string;

  sub: Subscription = null;

  constructor(private auth: AuthService, private router: Router, private token: TokenStorage, private fb: FormBuilder,
              private dialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) data
              ) { }

  ngOnInit() {
    console.log('calling ngOnInit...');
  }

  submit(f: NgForm) {
    console.log('calling submit...');
    this.auth.attemptAuth(this.username, this.password).subscribe( data => {
      this.token.save(data.token);
      this.router.navigate(['user']);
    });
    return false;
  }

  close() {
    this.dialogRef.close();
  }

}
