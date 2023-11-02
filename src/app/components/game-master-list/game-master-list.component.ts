import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { pagination } from 'src/app/constant/pagination.constant';
import { GameService } from 'src/app/services/game/game.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-game-master-list',
  templateUrl: './game-master-list.component.html',
  styleUrls: ['./game-master-list.component.css']
})
export class GameMasterListComponent {

  gameList : any =[];
  searchText: any;
  showLoader: boolean = false;
  myControl = new FormControl();
  page: number = pagination.page;
  pagesize = pagination.itemsPerPage;
  totalRecords: number = pagination.totalRecords;

  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private gamemasterservice: GameService
  ) { }

  ngOnInit(): void {
    this.getGameList();
  }

  getGameList() {
    this.showLoader = true;
    // Payload.projectmanagelist.search_text = this.searchText;
    // Payload.projectlist.page_number = String(this.page);
    // Payload.projectlist.page_size = String(this.pagesize);

    this.gamemasterservice.getGameConfig().subscribe((response) => {
      this.gameList = [];
      this.totalRecords = 0;
      if (response?.responseType == 'Success') {
        this.showLoader = false;
        this.gameList = response?.responseMessage;
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
    this.getGameList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  editGame(gameData :any) {
    this.router.navigateByUrl('add-game', { state: { gameData: gameData } });
  }

}
