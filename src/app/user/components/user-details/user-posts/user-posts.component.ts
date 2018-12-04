import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  constructor(
    private postsService: PostsService
  ) { }
  
  @Input() user: User;

  ngOnInit() {
    this.getPostsByUserId();
  }

  postList: any;

  getPostsByUserId() {
    this.postsService.getPostsByUserId(this.user.id)
    .subscribe(data => {
      this.postList = data;
    });
  }
}
