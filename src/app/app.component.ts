import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular first app</h1>
    <h2>{{title}}</h2>
    <courses></courses>
    <button (click)="testFunction()">test function</button>
    <p [@myAwesomeAnimation]="state" (click)="animateMe()">I will animate!</p>
    <app-authors></app-authors>
  `,
  styles: [`
    p {
      width:200px;
      background:lightgray;
      margin:100px auto;
      text-align:center;
      padding:20px;
      font-size:1.5em;
      cursor:pointer;
    }
  `],
  animations: [
    trigger('myAwesomeAnimation', [

      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('500ms ease-in', keyframes([
        style({opacity:0, transform:'translateY(-75%)', offset:0}),
        style({opacity:1, transform:'translateY(35%)', offset:0.5}),
        style({opacity:1, transform:'translateY(0%)', offset:1}),
      ]))),

    ]),
  ]
})
export class AppComponent {
  title = 'THE APP';

  state = 'small';

  constructor(private dataService: DataService) {

  }

  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  testFunction() {

    class Point {
      constructor(private _x?: number, private _y?: number) {}

      draw() {
        console.log('x: ' + this._x + ', y: ' + this._y);
      }
      get x() {
        return this._x;
      }
      set x(value) {
        if (value < 0) {
          throw new Error('value cannot be less than 0.');
        }
        this._x = value;
      }
      get y() {
        return this._y;
      }
      set y(value) {
        if (value < 0) {
          throw new Error('value cannot be less than 0.');
        }
        this._y = value;
      }
      getDistance(to: Point) {
        let xx = Math.pow(this.x - to.x, 2);
        console.log(xx);
        let yy = Math.pow(this.y - to.y, 2);
        console.log(yy);
        console.log(Math.sqrt(xx + yy));
      }
    }

    let point = new Point(1, 2);
    point.x = 400;
    point.draw();

  }
}
