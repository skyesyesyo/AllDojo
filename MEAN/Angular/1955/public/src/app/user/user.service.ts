import { Injectable } from '@angular/core';

// after ng g s user
import { Http } from '@angular/http';
// observerable libary
import 'rxjs';


@Injectable()
export class UserService {

  constructor( private _http: Http) { }

  // when this function is call it return promist to response with json file.
  getUsers(){
  	return this._http.get('/api/users')
  		.map( (response) => response.json())
  		.toPromise();
  }

  createUser(user){
  	return this._http.post('/api/users', user)
  		.map( (response) => response.json())
  		.toPromise()
  }

}
