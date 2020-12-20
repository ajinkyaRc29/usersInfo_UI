import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersformComponent } from './usersform/usersform.component';
import { UserComponent } from './usersform/user/user.component';
import { UserlistComponent } from './usersform/userlist/userlist.component';
import { UsersService } from './shared/users.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersformComponent,
    UserComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
