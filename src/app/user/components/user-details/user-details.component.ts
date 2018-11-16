import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 
  item: User;
  id: number = 0;

    constructor(
    private  usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
 
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getUserDetails();
  }

   getUserDetails() {
    this.usersService.getUserById(this.id)
    .subscribe(data => {
      this.item = data;
    });
  } 
}
