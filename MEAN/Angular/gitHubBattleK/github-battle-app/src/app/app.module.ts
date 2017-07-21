import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// need to add require modules start
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// need to add require modules end

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { RankingComponent } from './ranking/ranking.component';
import { GithubBattleComponent } from './github-battle/github-battle.component';

// Service start
import { GithubBattleService } from './github-battle.service';
import { Player1Component } from './battle/player1/player1.component';
import { Player2Component } from './battle/player2/player2.component';
import { ResultComponent } from './battle/result/result.component';
// Service end

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    RankingComponent,
    GithubBattleComponent,
    Player1Component,
    Player2Component,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [GithubBattleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
