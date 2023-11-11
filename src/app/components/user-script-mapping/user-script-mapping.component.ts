import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { pagination } from 'src/app/constant/pagination.constant';
import { MappingService } from 'src/app/services/mapping.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-user-script-mapping',
  templateUrl: './user-script-mapping.component.html',
  styleUrls: ['./user-script-mapping.component.css']
})
export class UserScriptMappingComponent {
  userscriptmappingList: any = [];
  searchText: any;
  showLoader: boolean = false;
  myControl = new FormControl();
  page: number = pagination.page;
  pagesize = pagination.itemsPerPage;
  totalRecords: number = pagination.totalRecords;

  userID: any;
  gameDate: any;
  scriptType: any;
  scriptID: any;
  userName: any;
  scriptName: any;

  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private usermappingservice: MappingService
  ) { }

  ngOnInit(): void {
    this.getScriptmappingList();
  }

  getScriptmappingList() {
    this.showLoader = true;
    // Payload.projectmanagelist.search_text = this.searchText;
    // Payload.projectlist.page_number = String(this.page);
    // Payload.projectlist.page_size = String(this.pagesize);

    let payload = {
      "userId": this.userID || '',
      "scriptIds": this.scriptID || '',
      "gameDate": this.gameDate || '',
      "scriptType": this.scriptType || '',
      "userName": this.userName || '',
      "scriptName": this.scriptName || '',
    }

    this.usermappingservice.getuserScriptMapping(payload).subscribe((response: any) => {
      this.userscriptmappingList = [];
      this.totalRecords = 0;
      if (response?.responseType == 'Success') {
        this.showLoader = false;
        this.userscriptmappingList = response?.responseMessage;
        // this.totalRecords = response?.totalCount;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, (error: any) => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }

  paginate(page: any) {
    this.page = page;
    this.getScriptmappingList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  editScript(scriptData: any) {
    this.router.navigateByUrl('add-script', { state: { scriptData: scriptData } });
  }

}
