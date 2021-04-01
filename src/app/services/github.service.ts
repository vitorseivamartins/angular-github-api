import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { user } from '../interfaces/user';
import { repos } from '../interfaces/repos';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
  private urlUser: string = environment.urlGithubApi + 'users/'; 

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<user>{
    return this.http
      .get<user>(this.urlUser + username);
  }

  getRepos(user: user): Observable<Array<repos>>{
    return this.http
      .get<Array<repos>>(user.repos_url);
  }
}