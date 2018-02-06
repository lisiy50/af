import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArchiveComponent implements OnInit {

  blogRecords = [
    {year: 2017, month: 10},
    {year: 2017, month: 11},
    {year: 2017, month: 12},
    {year: 2018, month: 1},
  ];

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
  }

}
