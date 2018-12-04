import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 
  user: User;
  id: number = 0;

  registerForm: FormGroup;
  submitted = false;

    constructor(
    private  usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

 
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getUserDetails();
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  getUserDetails() {
    this.usersService.getUserById(this.id)
    .subscribe(data => {
      this.user = data;
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.registerForm.invalid) {
          return;
      }
      this.usersService.editUserById(this.user);
      alert('SUCCESS!! :-)')
  }

  delUserDetails() {
    this.usersService.delUserById(this.user);
    this.router.navigate(['']);
  }


}
