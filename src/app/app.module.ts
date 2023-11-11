import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AddGameMasterComponent } from './components/add-game-master/add-game-master.component';
import { GameMasterListComponent } from './components/game-master-list/game-master-list.component';
import { ScriptMasterListComponent } from './components/script-master-list/script-master-list.component';
import { AddScriptMasterComponent } from './components/add-script-master/add-script-master.component';
import { AddUserMasterComponent } from './components/add-user-master/add-user-master.component';
import { UserMasterListComponent } from './components/user-master-list/user-master-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { NoRecordFoundComponent } from './common/no-record-found/no-record-found.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { UserScriptMappingComponent } from './components/user-script-mapping/user-script-mapping.component';
import { UserGameMappingComponent } from './components/user-game-mapping/user-game-mapping.component';
import { AddUserScriptMappingComponent } from './components/add-user-script-mapping/add-user-script-mapping.component';
import { AddUserGameMappingComponent } from './components/add-user-game-mapping/add-user-game-mapping.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    AddGameMasterComponent,
    MainPageComponent,
    GameMasterListComponent,
    ScriptMasterListComponent,
    AddScriptMasterComponent,
    AddUserMasterComponent,
    UserMasterListComponent,
    LoginComponent,
    NoRecordFoundComponent,
    UserScriptMappingComponent,
    UserGameMappingComponent,
    AddUserScriptMappingComponent,
    AddUserGameMappingComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AngularEditorModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
