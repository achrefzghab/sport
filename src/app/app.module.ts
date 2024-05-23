import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignupComponent } from './component/signup/signup.component';
import { CupEventComponent } from './component/cup-event/cup-event.component';
import { ResultComponent } from './component/result/result.component';
import { NewsComponent } from './component/news/news.component';
import { StandingComponent } from './component/standing/standing.component';
import { BlogComponent } from './component/blog/blog.component';
import { InfoComponent } from './component/info/info.component';
import { ArticlComponent } from './component/articl/articl.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddPlayersComponent } from './component/add-players/add-players.component';
import { AddTeamsComponent } from './component/add-teams/add-teams.component';
import { AdminComponent } from './component/admin/admin.component';
import { MatcheTabComponent } from './component/matche-tab/matche-tab.component';
import { TeamComponent } from './component/team/team.component';
import { PlayerTabComponent } from './component/player-tab/player-tab.component';
import { MatchesComponent } from './component/matches/matches.component';
import { PlayersComponent } from './component/players/players.component';
import { PlayerComponent } from './component/player/player.component';
import { TeamsComponent } from './component/teams/teams.component';
import { DisplayTeamComponent } from './component/display-team/display-team.component';
import { MatchinfoComponent } from './component/matchinfo/matchinfo.component';
import { TeaminfoComponent } from './component/teaminfo/teaminfo.component';
import { PlayerinfoComponent } from './component/playerinfo/playerinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { SearchComponent } from './component/search/search.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { EditTeamComponent } from './component/edit-team/edit-team.component';
import { UsersTabComponent } from './component/users-tab/users-tab.component';
import { SearchTeamComponent } from './component/search-team/search-team.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './component/profile/profile.component';
import { WeatherComponent } from './component/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StandingComponent,
    BlogComponent,
    InfoComponent,
    ArticlComponent,
    HomeComponent,
    LoginComponent,
    AddMatchComponent,
    AddPlayersComponent,
    AddTeamsComponent,
    AdminComponent,
    MatcheTabComponent,
    TeamComponent,
    PlayerTabComponent,
    MatchesComponent,
    PlayersComponent,
    PlayerComponent,
    TeamsComponent,
    DisplayTeamComponent,
    MatchinfoComponent,
    TeaminfoComponent,
    PlayerinfoComponent,
    AsterixPipe,
    ReversePipe,
    EditMatchComponent,
    SearchComponent,
    EditPlayerComponent,
    EditTeamComponent,
    UsersTabComponent,
    SearchTeamComponent,
    ProfileComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
