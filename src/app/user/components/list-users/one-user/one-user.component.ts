import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})

export class OneUserComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private router: Router) {
    }

  @Input() user: User;
  
  ngOnInit() {
  }

  goToDetails() {
    this.router.navigate(['user/' + this.user.id]);
  }

}
