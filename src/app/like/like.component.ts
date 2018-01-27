import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LikeComponent {
  @Input('tweet') tweet: TweetInterface;
  @Output('change') change = new EventEmitter();

  onClick() {
    if (this.tweet.isLiked) {
      this.tweet.likesCount--;
      this.tweet.isLiked = false;
    } else {
      this.tweet.likesCount++;
      this.tweet.isLiked = true;
    }
    this.change.emit({tweet: this.tweet});
  }

}

export interface TweetInterface {
  body: string,
  isLiked: boolean,
  likesCount: number
}

export interface LikeChangeEventArgs {
  tweet: TweetInterface
}
