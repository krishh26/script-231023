import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { pagination } from 'src/app/constant/pagination.constant';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ScriptService } from 'src/app/services/script/script.service';

@Component({
  selector: 'app-script-master-list',
  templateUrl: './script-master-list.component.html',
  styleUrls: ['./script-master-list.component.css']
})
export class ScriptMasterListComponent {

  scriptList: any = [];
  searchText: any;
  showLoader: boolean = false;
  myControl = new FormControl();
  page: number = pagination.page;
  pagesize = pagination.itemsPerPage;
  totalRecords: number = pagination.totalRecords;

  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private scriptmasterservice: ScriptService
  ) { }

  ngOnInit(): void {
    this.getScriptList();
  }

  getScriptList() {
    this.showLoader = true;
    // Payload.projectmanagelist.search_text = this.searchText;
    // Payload.projectlist.page_number = String(this.page);
    // Payload.projectlist.page_size = String(this.pagesize);

    this.scriptmasterservice.getScriptData().subscribe((response) => {
      this.scriptList = [];
      this.totalRecords = 0;
      if (response?.responseType == 'Success') {
        this.showLoader = false;
        this.scriptList = response?.responseMessage;
        // this.totalRecords = response?.totalCount;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, (error) => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }

  paginate(page: any) {
    this.page = page;
    this.getScriptList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  editScript(scriptData: any) {
    this.router.navigateByUrl('add-script', { state: { scriptData: scriptData } });
  }

}
