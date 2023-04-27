import { Router } from '@angular/router';
import { AccountClient, LoginVM } from './../../../../model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AccountClient],
})
export class LoginComponent {
  login: LoginVM = new LoginVM();
  loginErrorMessege: string = '';

  constructor(private loginService: AccountClient, private router: Router) {}
  
  LoginClick() {
    this.loginService.authenticate(this.login).subscribe(
      (res) => {
        this.router.navigateByUrl('/books/list');
      },
      (err) => {
        console.log(err);
        this.loginErrorMessege = 'Wrong UserName Or Password !!!';
      }
    );
  }
}
