import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserRoutingModule } from './user-routing.module';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { OneUserComponent } from './components/list-users/one-user/one-user.component';
import { UserPostsComponent } from './components/user-details/user-posts/user-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserDetailsComponent,
    ListUsersComponent,
    OneUserComponent,
    UserPostsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [] 
})

export class UserModule { }