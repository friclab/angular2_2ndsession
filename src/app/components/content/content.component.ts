import { ApiService } from './../../services/api.service';
import { Post } from './../../models/post';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'content-component',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  posts: Array<Post>;
  totalLikes: number;
 // @Output() onCreated: EventEmitter<any> = new EventEmitter();


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.totalLikes = 0;
     

    this.listPosts();

    //setInterval( this.listPosts.bind(this), 2000);
    setInterval(() => { this.listPosts() }, 20000);


  }

  onLike($event) {
    console.log("onlike:", $event);
    console.log("likePost:", $event);

    this.apiService.likePost($event).subscribe(
      (data) => {
        console.log("likePost", data);
        this.listPosts();
      },
      () => {
        console.log("error!!");
      });

  }

  onDelete($event) {
    console.log("onDelete:", $event);
    this.apiService.deletePost($event.id).subscribe(
      (data) => {
        console.log("deletePost", data);
        this.listPosts();
      },
      () => {
        console.log("error!!");
      });

  }

  listPosts() {
    this.totalLikes = 0;
    this.apiService.fetchPosts().subscribe(

      (data) => {
        console.log("fetch", data);
        this.posts = data;
        this.posts.map((post: Post) => {
          this.totalLikes = this.totalLikes + post.likes;
        });
      },
      () => {
        console.log("error!!");
      });
  }


  createPost($event: string) {
    console.log("createPost:", $event);
    let post: any = {

      likes: 0,
      content: $event
    };

    this.apiService.createPost(post).subscribe(
      (data) => {
        console.log("createPost", data);
    //    this.onCreated.emit(null);
        this.listPosts();

      },
      () => {
        console.log("error!!");
      });

  }



  deletePost($event: number) {
    console.log("deletePost:", $event);

    this.apiService.deletePost($event).subscribe(
      (data) => {
        console.log("deletePost", data);
        this.listPosts();
      },
      () => {
        console.log("error!!");
      });

  }

}