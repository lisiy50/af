import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MoshFollowersService } from './../services/mosh-followers.service';

@Component({
  selector: 'app-mosh-followers',
  templateUrl: './mosh-followers.component.html',
  styleUrls: ['./mosh-followers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoshFollowersComponent implements OnInit {

  followers: any[];

  constructor(private service: MoshFollowersService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(followers => this.followers = followers);
  }

}
