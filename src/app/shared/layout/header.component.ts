import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AuthService} from '../../core/auth.service';
import {Router} from '@angular/router';
import {TokenStorage} from '../../core/token-storage';
import {LoginComponent} from '../../auth/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginVisible: boolean;

  constructor(public dialog: MatDialog, private auth: AuthService, private router: Router, private token: TokenStorage) {}
  openLoginDialog() {
    if (!this.loginVisible) {
      return;
    }

    this.loginVisible = false;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      username: '',
      password: ''
    };

    const dialogRef = this.dialog.open(LoginComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => this.processAfterClose(data));
  }

  processAfterClose(data) {
    this.loginVisible = true;
    this.auth.attemptAuth(data.username, data.password).subscribe( token => {
        this.token.save(token.token);
        this.router.navigate(['user']);
        this.loginVisible = true;
      }
    );
  }
  closeLoginDialog() {
    this.loginVisible = true;
    this.dialog.closeAll();
  }

  register() {}

  ngOnInit(): void {
    this.loginVisible = true;
  }
}
