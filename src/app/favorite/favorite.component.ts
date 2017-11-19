import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FavoriteComponent implements OnInit {
  liked = false;
  btnText = 'Not Liked';

  like()
  {
    this.liked = !this.liked;
    this.btnText = this.liked ? 'Liked' : 'Not Liked';
  }

  constructor() { }

  ngOnInit() {
  }

}
