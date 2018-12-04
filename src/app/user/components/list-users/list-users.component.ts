import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(
    private  usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  listUsers: any;

  getUsers(){

    this.usersService.getUsers().subscribe(data => {
        this.listUsers = data;
    });
  }
  
}
