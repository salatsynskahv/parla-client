import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AuthService} from '../core/auth.service';
import {Router} from '@angular/router';
import {TokenStorage} from '../core/token-storage';
import {LoginComponent} from '../auth/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
