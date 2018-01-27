import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthorsService} from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthorsComponent implements OnInit {
  authors;

  constructor(service: AuthorsService) {
    this.authors = service.list;
  }

  ngOnInit() {
  }

}
