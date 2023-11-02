import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { pagination } from 'src/app/constant/pagination.constant';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-master-list',
  templateUrl: './user-master-list.component.html',
  styleUrls: ['./user-master-list.component.css']
})
export class UserMasterListComponent {

  userList: any = [];
  searchText: any;
  showLoader: boolean = false;
  myControl = new FormControl();
  page: number = pagination.page;
  pagesize = pagination.itemsPerPage;
  totalRecords: number = pagination.totalRecords;

  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private usermasterservice: UserService
  ) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.showLoader = true;
    // Payload.projectmanagelist.search_text = this.searchText;
    // Payload.projectlist.page_number = String(this.page);
    // Payload.projectlist.page_size = String(this.pagesize);

    this.usermasterservice.getUser().subscribe((response) => {
      this.userList = [];
      this.totalRecords = 0;
      if (response?.responseType == 'Success') {
        this.showLoader = false;
        this.userList = response?.responseMessage;
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

  getuserList(){

  }

  paginate(page: any) {
    this.page = page;
    this.getuserList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  editUser(userData : any) {
    this.router.navigateByUrl('add-user', { state: { userData: userData } });
  }
  

}
