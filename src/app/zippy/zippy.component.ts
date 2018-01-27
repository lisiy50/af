import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ZippyComponent implements OnInit {
  @Input('title') title: string;
  @Input('content') content: string;
  private _visible = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this._visible = !this._visible;
  }

  isVisible() {
    return this._visible;
  }

}
