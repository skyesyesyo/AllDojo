import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// after do ng g c user, user-list etc add it here.
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserShowComponent } from './user/user-show/user-show.component';
import { UserCreateComponent } from './user/user-create/user-create.component';

 
const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/users'},
	{ path: 'users', component: UserComponent, children: [
		{ path: 'list', component: UserListComponent},
		{ path: 'create', component: UserCreateComponent}
	] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],

})

export class AppRoutingModule { }