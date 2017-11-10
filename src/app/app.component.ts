import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
    <p [@myAwesomeAnimation]="state" (click)="animateMe()">I will animate!</p>
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

  state: string = 'small';

  constructor(private dataService:DataService) {

  }

  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
