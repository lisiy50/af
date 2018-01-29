import { PostService } from './../services/post.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  posts: any[];

  ngOnInit () {
    this.service.getPosts()
    .subscribe(
      response => {
        this.posts = response.json();
      }, 
      (error: Response) => {
        alert('An unexpected error occurred on init.');
        console.log(error);
      });
  }

  constructor(private service: PostService) {
  }
  
  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    };
    input.value = '';
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
        }, 
        (error: Response) => {
          if (error.status === 400) {
            // this.form.setErrors(error.json());
            // alert('');
          } else {
            alert('An unexpected error occurred on create post.');
            console.log(error);
          }
        });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response.json());
        },
        (error: Response) => {
          alert('An unexpected error occurred on update post.');
          console.log(error);
        });
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(
          response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }, 
        (error: Response) => {
          if (error.status === 404) {
              alert('This post has already been deleted.');
          } else {
            alert('An unexpected error occurred on delete post.');
            console.log(error);
          }
        });
  }

}
