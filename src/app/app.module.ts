import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UsersService } from './shared/Users.service';
import { FormsModule } from '@angular/forms';
import { NewGroupComponent } from './new-group/new-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UsersComponent,
    UserComponent,
    NewGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
