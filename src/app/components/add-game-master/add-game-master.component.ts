import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { GameService } from 'src/app/services/game/game.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-add-game-master',
  templateUrl: './add-game-master.component.html',
  styleUrls: ['./add-game-master.component.css']
})
export class AddGameMasterComponent {

  state: any = [];
  gameDetails: any;

  defaultAddGameForm = {
    gameName: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    termsAndCondition: new FormControl("", [Validators.required]),
    entryStartDate: new FormControl("", [Validators.required]),
    entryEndDate: new FormControl("", [Validators.required]),
    entryAmount: new FormControl("", [Validators.required]),
    platformCommission: new FormControl("", [Validators.required]),
    prizePool: new FormControl("", [Validators.required]),
    globalWinner: new FormControl("", [Validators.required]),
    luckyDrawWinner: new FormControl("", [Validators.required]),
    luckyDrawPrize: new FormControl("", [Validators.required]),
    gameImg: new FormControl("ter", [Validators.required]),
    repeatTill: new FormControl("", [Validators.required]),
    scriptIds: new FormControl("", [Validators.required]),
  };

  addGameForm = new FormGroup(this.defaultAddGameForm, []);

  imageSrc: any;

  constructor(
    private gameService: GameService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.gameDetails = this.router.getCurrentNavigation()?.extras?.state;
    this.gameDetails = this.gameDetails?.gameData
    if (this.gameDetails) {
      this.setgameDetails()
    }
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  ngOnInit(): void {

  }

  setgameDetails() {
    this.addGameForm.controls.gameName.setValue(this.gameDetails?.gameName);
    this.addGameForm.controls.description.setValue(this.gameDetails?.description);
    this.addGameForm.controls.termsAndCondition.setValue(this.gameDetails?.termsAndCondition);
    this.addGameForm.controls.entryStartDate.setValue(this.gameDetails?.entryStartDate);
    this.addGameForm.controls.entryEndDate.setValue(this.gameDetails?.entryEndDate);
    this.addGameForm.controls.entryAmount.setValue(this.gameDetails?.entryAmount);
    this.addGameForm.controls.platformCommission.setValue(this.gameDetails?.platformCommission);
    this.addGameForm.controls.prizePool.setValue(this.gameDetails?.prizePool);
    this.addGameForm.controls.globalWinner.setValue(this.gameDetails?.globalWinner);
    this.addGameForm.controls.luckyDrawWinner.setValue(this.gameDetails?.luckyDrawWinner);
    this.addGameForm.controls.gameImg.setValue(this.gameDetails?.gameImg);
    this.addGameForm.controls.repeatTill.setValue(this.gameDetails?.repeatTill);
    this.addGameForm.controls.scriptIds.setValue(this.gameDetails?.scriptIds);
  }

  activeInactive(value: boolean) {
    //  this.addGameForm.controls.isActive.setValue(value);
  }

  onCLUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.addGameForm.controls.gameImg.setValue(file?.name)
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }
  }

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  submit() {
    this.addGameForm.markAllAsTouched();

    console.log('responseTyperesponseType', this.addGameForm.valid, this.addGameForm.value)
    if (!this.addGameForm.valid) {
      return this.notificationService.showError('Please fill valid details')
    }

    let payload = {};

    if (this.gameDetails) {
      payload = {
        id: this.gameDetails.id,
        ...this.addGameForm.value
      }
    } else {
      payload = { ...this.addGameForm.value }
    }
    this.gameService.addEditGameConfig(payload).subscribe(
      (res: any) => {
        console.log('responseType', res)
        if (res?.responseType == "Success") {
          this.notificationService.showSuccess('Game Added Successfully');
          this.addGameForm.reset();
          this.router.navigateByUrl('/game-list');
        }
      },
      (error: any) => {
        this.notificationService.showError(error?.message);
      }
    );
  }

}
