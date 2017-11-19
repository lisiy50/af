import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-title-case',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TitleCaseComponent implements OnInit {
  title = 'the war for the planet of apes';

  constructor() { }

  ngOnInit() {
  }

}
