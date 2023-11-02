import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-user-master',
  templateUrl: './add-user-master.component.html',
  styleUrls: ['./add-user-master.component.css']
})
export class AddUserMasterComponent implements OnInit{

  state: any = [];
  userDetails: any;
  emailError: string = '';
  defaultAddUserForm = {
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    mobileNumber: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required , Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]),
    userType: new FormControl(1, [Validators.required]),
    userCode: new FormControl("", [Validators.required]),
    password: new FormControl("Kishan@1", [Validators.required]),
    isActive: new FormControl(true, [Validators.required])
  };

  addUserForm = new FormGroup(this.defaultAddUserForm, []);

  constructor(
    private userService: UserService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.userDetails = this.router.getCurrentNavigation()?.extras?.state;
    this.userDetails = this.userDetails?.scriptData
    if (this.userDetails) {
      this.setUserDetails()
    }
  }

  ngOnInit(): void {
   
  }

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }


  setUserDetails() {
    this.addUserForm.controls.firstName.setValue(this.userDetails?.firstName);
    this.addUserForm.controls.lastName.setValue(this.userDetails?.lastName);
    this.addUserForm.controls.mobileNumber.setValue(this.userDetails?.mobileNumber);
    this.addUserForm.controls.email.setValue(this.userDetails?.email);
    this.addUserForm.controls.userType.setValue(this.userDetails?.userType);
    this.addUserForm.controls.userCode.setValue(this.userDetails?.userCode);
    this.addUserForm.controls.password.setValue(this.userDetails?.password);
  }

  activeInactive(value: boolean) {
    this.addUserForm.controls.isActive.setValue(value);
  }

  submit() {
    this.addUserForm.markAllAsTouched();

    if (!this.addUserForm.valid) {
      return this.notificationService.showError('Please fill valid details')
    }

    let payload = {};

    if (this.userDetails) {
      payload = {
        id: this.userDetails.id,
        ...this.addUserForm.value
      }
    } else {
      payload = { ...this.addUserForm.value }
    }
    this.userService.addEditUser(payload).subscribe(
      (res: any) => {
        if (res?.responseType == "Success") {
          this.notificationService.showSuccess('User Added Successfully');
          this.addUserForm.reset();
          this.router.navigateByUrl('/user-list');
        }
      },
      (error: any) => {
        this.notificationService.showError(error?.message);
      }
    );
  }
}
