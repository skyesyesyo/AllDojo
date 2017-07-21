import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
// for .map
import 'rxjs';

@Injectable()
export class GithubBattleService {

  constructor(private _http: Http) { }

  getInfo(user){
  	return this._http.get('https://api.github.com/users/'+user.username).map(response => response.json()).toPromise();
  }
  addUser(userInfo){
  	// need to package here or at battle.component
  	// we need avatar_url, login, followers, public_repos
  	var postData = {
  		username: userInfo.login,
  		score: (userInfo.follwers+userInfo.public_repos)*12,
  		imagePath: userInfo.avatar_url
  	}
  	return this._http.post('/api/players', postData).map(response => response.json()).toPromise();
  }
}
