import { Component, OnInit } from '@angular/core';

// We need data for player1, so we need a service call.
// This is the end of the line!
import { GithubBattleService } from './../github-battle.service';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  
  formFilled: Boolean = false;
  battleStarted: Boolean = false;

  player1 = {username: "", score: 0, imagePath: "https://dvsgaming.org/wp-content/uploads/2016/12/heroes-of-the-storm-logo-1920x1080.jpg"}

  constructor(private _battleService: GithubBattleService) { }

  ngOnInit() {
  }
  startBattle(){
  	this.formFilled=true;
  }
  dataFromPlayer1(data){
  	// 1st need a service call
  	// 2nd query database
  	console.log("in dataFromPlayer1");
  	this._battleService.getInfo(data)
  	.then((data) => {
  		// we need avatar_url, login, followers, public_repos
  		// if we get data for player1 .then we redefine this.player1 then send to component
  		console.log('Successfully got api info');
  		this._battleService.addUser(data)
  		.then((data) => {
  			console.log('added user')
  			this.player1 = data;
  		})
  		.catch(errors => console.log(errors));
  	})
  	.catch(error => console.log(error))
  }

}
