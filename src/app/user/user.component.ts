import { Component, Input, OnInit } from '@angular/core';

import { user } from '../interfaces/user';
import { repos } from '../interfaces/repos';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() userSeached: user = <user>{};
  @Input() userRepos: Array<repos> = [];

  constructor() { }

  ngOnInit(): void {
  }
}
