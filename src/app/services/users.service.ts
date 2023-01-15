import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getUsers() {
     return this.httpClient.get<User[]>(this.url);
  }

  saveUser(user: User){
    console.log(user);
    return this.httpClient.post<any>(this.url, user);
    //Call Http EndPoint POST
  }
}
