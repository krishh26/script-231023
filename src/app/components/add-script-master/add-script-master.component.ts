import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ScriptService } from 'src/app/services/script/script.service';

@Component({
  selector: 'app-add-script-master',
  templateUrl: './add-script-master.component.html',
  styleUrls: ['./add-script-master.component.css']
})
export class AddScriptMasterComponent {
  scriptDetails: any;
  defaultAddScriptForm = {
    scriptName: new FormControl("", [Validators.required]),
    scriptCode: new FormControl("", [Validators.required]),
    isActive: new FormControl(true, [Validators.required])
  };

  addScriptForm = new FormGroup(this.defaultAddScriptForm, []);

  constructor(
    private scriptService: ScriptService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.scriptDetails = this.router.getCurrentNavigation()?.extras?.state;
    this.scriptDetails = this.scriptDetails?.scriptData
    if (this.scriptDetails) {
      this.setScriptDetails()
    }
  }

  ngOnInit() {
  }

  setScriptDetails() {
    this.addScriptForm.controls.scriptCode.setValue(this.scriptDetails?.scriptCode);
    this.addScriptForm.controls.scriptName.setValue(this.scriptDetails?.scriptName);
    this.addScriptForm.controls.isActive.setValue(this.scriptDetails?.isActive);
  }

  activeInactive(value: boolean) {
    this.addScriptForm.controls.isActive.setValue(value);
  }

  submintForm() {
    this.addScriptForm.markAllAsTouched();

    if (!this.addScriptForm.valid) {
      return this.notificationService.showError('Please fill valid details')
    }

    let payload = {};

    if (this.scriptDetails) {
      payload = {
        id: this.scriptDetails.id,
        ...this.addScriptForm.value
      }
    } else {
      payload = { ...this.addScriptForm.value }
    }

    this.scriptService.addEditScript(payload).subscribe(
      (res: any) => {
        if (res?.responseType == "Success") {
          this.notificationService.showSuccess('Script Added Successfully');
          this.addScriptForm.reset();
          this.router.navigateByUrl('/script-list');
        }
      },
      (error: any) => {
        this.notificationService.showError(error?.message);
      }
    );
  }
}
