import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UseerLogin } from 'src/app/models/login';
import { LoginService } from 'src/app/services/auth/login.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUser: any = [];

  constructor(
    private notificationService: NotificationService,
    public loginService: LoginService,
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {
    this.loginUser = this.localStorageService.getLogger();
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]),
    password: new FormControl('',[ Validators.required , Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
  });

  login(): void {
    // let userLogin = {} as UseerLogin;
    this.loginForm.markAllAsTouched();
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginService.loginUser(this.loginForm.value).subscribe((res) => {
        if (res.responseType == 'Success') {
          this.localStorageService.setLogger(res?.responseMessage);
          this.router.navigateByUrl('/user-list');
          this.notificationService.showSuccess('Login Successfully', 'Success');
        } else {
          this.notificationService.showError('Record not found', 'Error');
        }
      }, (error) => {
        this.notificationService.showError(error?.message || 'Something Went Wrong!');
      })
    }
  }


}
