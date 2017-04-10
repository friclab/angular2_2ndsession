import { Post } from './../models/post';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


const API_URL = "/api/";
const POSTS_ENDPOINT = API_URL + "posts";


@Injectable()
export class ApiService {
    constructor(
        private http: Http
    ) { }

    fetchPosts(): Observable<Post[]> {
        return this.http.get(POSTS_ENDPOINT)
            .map((response: Response) => {
                let body = response.json();
                return body || {};
            }
            ).catch((err: Response | any) => {
                return Observable.throw(err);
            });

    }

    createPost(post: Post) {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(POSTS_ENDPOINT, post, options).map((response: Response) => {
            let body = response.json();
            return body || {};
        }
        ).catch((err: Response | any) => {
            return Observable.throw(err);
        });
    }


    deletePost(id: number): Observable<Post[]> {
        return this.http.delete(POSTS_ENDPOINT + "/" + id)
            .map((response: Response) => {
                let body = response.json();
                return body || {};
            }
            ).catch((err: Response | any) => {
                return Observable.throw(err);
            });

    }


    likePost(post: Post) {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        let likes = { likes: post.likes + 1 };

        return this.http.put(POSTS_ENDPOINT + "/" + post.id, likes, options).map((response: Response) => {
            let body = response.json();
            return body || {};
        }
        ).catch((err: Response | any) => {
            return Observable.throw(err);
        });
    }
}