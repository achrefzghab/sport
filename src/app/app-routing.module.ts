import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddPlayersComponent } from './component/add-players/add-players.component';
import { AddTeamsComponent } from './component/add-teams/add-teams.component';
import { AdminComponent } from './component/admin/admin.component';
import { MatchesComponent } from './component/matches/matches.component';
import { PlayersComponent } from './component/players/players.component';
import { TeamsComponent } from './component/teams/teams.component';
import { MatchinfoComponent } from './component/matchinfo/matchinfo.component';
import { TeaminfoComponent } from './component/teaminfo/teaminfo.component';
import { PlayerinfoComponent } from './component/playerinfo/playerinfo.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { SearchComponent } from './component/search/search.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { EditTeamComponent } from './component/edit-team/edit-team.component';
import { SearchTeamComponent } from './component/search-team/search-team.component';
import { ProfileComponent } from './component/profile/profile.component';
import { WeatherComponent } from './component/weather/weather.component';

const routes: Routes = [

  {path :'' , component : HomeComponent},
  {path : 'connexion' , component: LoginComponent},
  {path:'inscription' , component:SignupComponent},
  {path:'signupAdmin' , component:SignupComponent},
  {path:'addmatch',component:AddMatchComponent},
  {path:'addplayer',component:AddPlayersComponent},
  {path:'addteam',component:AddTeamsComponent},
  {path:'admin',component:AdminComponent},
  {path:'matches',component:MatchesComponent},
  {path:'players',component:PlayersComponent},
  {path:'teams',component:TeamsComponent},
  {path:'matchinfo/:id',component:MatchinfoComponent},
  {path:'teaminfo/:id',component:TeaminfoComponent},
  {path:'playerinf/:id', component:PlayerinfoComponent},
  {path:'edit-match/:id', component:EditMatchComponent},
  {path:'searchMatch', component:SearchComponent},
  {path:'edit-player/:id', component:EditPlayerComponent},
  {path:'edit-team/:id', component:EditTeamComponent},
  {path:'searchTeam', component:SearchTeamComponent},
  {path:'profile', component:ProfileComponent},
  {path:'weather', component:WeatherComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
