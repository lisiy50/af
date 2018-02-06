import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MoshFollowersService } from './../services/mosh-followers.service';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-mosh-followers',
  templateUrl: './mosh-followers.component.html',
  styleUrls: ['./mosh-followers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoshFollowersComponent implements OnInit {

  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: MoshFollowersService
  ) { }

  ngOnInit() {
    let obs = Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        return this.service.getAll();
      })
      .subscribe(followers => {
        this.followers = followers;
      });
  }

}
