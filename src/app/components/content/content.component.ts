import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content-component',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  posts: Array<Post>;
  totalLikes: number;

  ngOnInit() {
    this.totalLikes = 0;
    this.posts = [{
      id: 1,
      likes: 1,
      content: "sono uil contentuto del post 1 "
    },
    {
      id: 2,
      likes: 1,
      content: "sono uil contentuto del post 2 "
    },
    {
      id: 3,
      likes: 0,
      content: "sono uil contentuto del post 3 "
    },
    {
      id: 4,
      likes: 99,
      content: "sono uil contentuto del post 4 "
    }];
    this.posts.map((post: Post) => {
      this.totalLikes = this.totalLikes + post.likes;
    });
  }

  onLike($event) {
    console.log("onlike:", $event);
    this.totalLikes = this.totalLikes + 1;

  }


  createPost($event: string) {
    console.log("createPost:", $event);
    let post: Post = {
      id: this.posts.length + 1,
      likes: 0,
      content: $event
    };
    this.posts.push(post);
  }
}