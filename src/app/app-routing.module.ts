import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameMasterComponent } from './components/add-game-master/add-game-master.component';
import { GameMasterListComponent } from './components/game-master-list/game-master-list.component';
import { ScriptMasterListComponent } from './components/script-master-list/script-master-list.component';
import { AddScriptMasterComponent } from './components/add-script-master/add-script-master.component';
import { AddUserMasterComponent } from './components/add-user-master/add-user-master.component';
import { UserMasterListComponent } from './components/user-master-list/user-master-list.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  // { path: '', component: LoginComponent },
  // { path: 'add-game', component: AddGameMasterComponent },
  // { path: 'game-list', component: GameMasterListComponent },
  // { path: 'script-list', component: ScriptMasterListComponent },
  // { path: 'add-script', component: AddScriptMasterComponent },
  // { path: 'add-user', component: AddUserMasterComponent },
  // { path: 'user-list', component: UserMasterListComponent },

  {
    path: '',
    component: MainPageComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      { path: 'add-game', component: AddGameMasterComponent },
      { path: 'game-list', component: GameMasterListComponent },
      { path: 'script-list', component: ScriptMasterListComponent },
      { path: 'add-script', component: AddScriptMasterComponent },
      { path: 'add-user', component: AddUserMasterComponent },
      { path: 'user-list', component: UserMasterListComponent },
    ]
  },

  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [NonAuthGuard]
  },

  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
