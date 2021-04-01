import { Component, OnInit } from '@angular/core';

import { user } from '../interfaces/user';
import { repos } from '../interfaces/repos';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class MainComponent implements OnInit {

  public usernameInput: string = 'vitorseivamartins';
  userSeached: user = <user>{};
  userRepos: Array<repos> = [];
  warning: boolean = false;
  
  constructor(private githubService: GithubService) { 
  }

  ngOnInit(): void {
  }

  public searchUser() {

    this.userSeached = <user>{};
    this.userRepos = [];

    if(this.usernameInput == '') return;

    this.getUser();
  }

  public getUser() {
    this.githubService.getUser(this.usernameInput)
    .subscribe((resp: user) => {
      this.userSeached = resp;
      this.warning = false;
      if(this.userSeached.public_repos > 0 )
        this.getRepos();

    }, error => {
      this.warning = true;
    });
  }

  public getRepos() {
      this.githubService.getRepos(this.userSeached)
      .subscribe((resp: Array<repos>) => {
        this.userRepos = resp;
      }, error => {
        console.log('error getting user repo')
      });
  }
}