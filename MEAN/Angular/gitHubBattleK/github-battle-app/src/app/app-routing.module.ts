import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// add components start
import { BattleComponent } from './battle/battle.component';
import { RankingComponent } from './ranking/ranking.component';
// add components end

const routes: Routes = [
  {
    path: 'battle',
    component: BattleComponent
  },
  {
  	path: "ranking",
  	component: RankingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
