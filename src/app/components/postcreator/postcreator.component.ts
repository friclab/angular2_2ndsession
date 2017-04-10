import { Post } from './../../models/post';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'postcreator-component',
    templateUrl: './postcreator.component.html',
    styleUrls: ['./postcreator.component.css']
})
export class PostcreatorComponent {

    @Output() onNewPost: EventEmitter<any> = new EventEmitter();

    content: string = "";
    onSubmit($event) {
        console.log(this.content);
        this.onNewPost.emit(this.content);

    }

    
}