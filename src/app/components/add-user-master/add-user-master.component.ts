import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-user-master',
  templateUrl: './add-user-master.component.html',
  styleUrls: ['./add-user-master.component.css']
})
export class AddUserMasterComponent implements OnInit{

  state: any = [];

  constructor(
    private notificationService: NotificationService,
    public userservice: UserService,
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {
    // this.loginUser = this.localStorageService.getLogger();
  }

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]),
    password: new FormControl('1234'),
    userType: new FormControl('Broker'),
    userCode: new FormControl('', [Validators.required]),
  });

  // userFormData = new FormGroup(       , []);

  ngOnInit(): void {
    if (this.state?.userData) {
      this.setUserDetails();
    }
  }

  setUserDetails() {
    // this.userFormData.controls.firstName.setValue(this.state?.userData?.firstName || '');
    // this.userFormData.controls.lastName.setValue(this.state?.userData?.lastName || '');
    // this.userFormData.controls.mobileNumber.setValue(this.state?.userData?.mobileNumber || '');
    // this.userFormData.controls.email.setValue(this.state?.userData?.email || '');
    // this.userFormData.controls.userType.setValue(this.state?.userData?.userType || '');
    // this.userFormData.controls.userCode.setValue(this.state?.userData?.userCode || '');
    // this.userFormData.controls.password.setValue(this.state?.userData?.password || '');
  }

  submit() {
    if (this.state?.externalEmployeeData) {
      this.editUser();
    } else {
      this.addUser();
    }
  }

  addUser() {

  }

  editUser() {

  }
}
