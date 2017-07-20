import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Added FormsModule
import { FormsModule } from '@angular/forms';
// Added HttpModule
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


// for Route
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserShowComponent } from './user/user-show/user-show.component';

// after ng g s user
import { UserService } from './user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserCreateComponent,
    UserShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
