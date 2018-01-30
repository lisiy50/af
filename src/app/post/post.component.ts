import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
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
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
  }

  constructor(private service: PostService) {
  }
  
  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    };
    input.value = '';
    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
          this.posts.splice(0, 0, post);
        }, 
        (error: AppError) => {
          console.log(error instanceof BadInput);
          if (error instanceof BadInput) {
              alert('This is create error.');
              // this.form.setErrors(error.originalError);
          } else {
            throw error;
          }
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(updatedPost => console.log(updatedPost));
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
              alert('This post has already been deleted.');
          } else {
            throw error;
          }
        });
  }

}
