import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archive-view',
  templateUrl: './archive-view.component.html',
  styleUrls: ['./archive-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArchiveViewComponent implements OnInit {

  archiveRecord: {year: number, month: number};

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.archiveRecord = {
        year: +params.get('year'),
        month: +params.get('month')
      }
    });
  }

  click() {
    this.router.navigate(['/archive']);
  }

}
