import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

// Input is need to get data from parent

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit {

  player = {username: ""}
  @Output() player1Event = new EventEmitter();
  @Input() playerInfo;

  constructor() { }

  ngOnInit() {
  }
  player1Submit(){
  	console.log(this.player.username);
  	this.player1Event.emit(this.player);
  }
  // if username is no longer blank, then update info.

}
