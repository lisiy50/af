import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite = false;
  btnText = 'Not Liked';
  @Output('change') click = new EventEmitter();

  like() {
    this.isFavorite = !this.isFavorite;
    this.btnText = this.isFavorite ? 'Liked' : 'Not Liked';
    this.click.emit({ newValue: this.isFavorite});
  }

  constructor() { }

  ngOnInit() {

  }

}

export interface FaviriteChangeEventArgs {
  newValue: boolean
}
