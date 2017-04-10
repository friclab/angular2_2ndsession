import { Post } from './../../models/post';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate, state } from "@angular/core";
@Component({
    selector: 'post-component',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
  animations: [
    trigger('showpost', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class PostComponent {


    @Input('data') post: Post;
    @Output() onLike: EventEmitter<any> = new EventEmitter();
    @Output() onDelete: EventEmitter<any> = new EventEmitter();

    onLikeClick($event) {
        console.log(" someone likes me!!! increasing 1...");

        this.onLike.emit(this.post);
    }

    onDeleteClick($event) {
        console.log(" deleting post...", $event);
        this.onDelete.emit(this.post);
    }
}