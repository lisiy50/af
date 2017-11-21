import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { FaviriteChangeEventArgs } from './favorite/favorite.component';
import { LikeChangeEventArgs } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true,
  };
  tweet = {
    body: 'Tweet body...',
    isLiked: false,
    likesCount: 0,
  }

  onFavoriteChanged(eventArgs: FaviriteChangeEventArgs){
    console.log('Favorite changed: ', eventArgs.newValue);
  }

  onLikeChanged(eventArgs: LikeChangeEventArgs) {
    console.log('Like changed: ', eventArgs.tweet);
  }
}
