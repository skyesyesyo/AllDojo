import { Component, OnInit } from '@angular/core';

// after add UserService @ app.module.ts
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	users: Array<any>;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  	// console.log("Before call", this.users);
  	this.getComponentUsers();

  	// console.log("After call", this.users);
  }

  getComponentUsers(){
  	this._userService.getUsers()
  		.then( (response) => this.users = response)
  		.catch( (err) => console.log(err))
  }


  addUser(data){
  	this._userService.createUser(data.value)
  		.then( response => {
  			console.log(response);
  			this.getComponentUsers();
  		})
  		.catch( (err) => console.log(err))
  }

}
