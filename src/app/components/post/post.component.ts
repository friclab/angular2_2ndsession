import { Post } from './../../models/post';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'post-component',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent {


    @Input('data') post: Post;
    @Output() onLike: EventEmitter<any> = new EventEmitter();

    onLikeClick($event) {
        console.log(" someone likes me!!! increasing 1...");
        this.post.likes = this.post.likes + 1;
        this.onLike.emit(this.post);
    }
}