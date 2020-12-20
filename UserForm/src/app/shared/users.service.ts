import { Injectable } from '@angular/core';
import { Users } from './users.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  formData: Users;
  listOfUsers: Users[];
  private readonly rootURL = "http://localhost:50269/api";

  constructor(public http: HttpClient) { }

  postUser(formData: Users) {
    return this.http.post(this.rootURL + '/UsersDetail', formData);
  }

  putUser(formData: Users) {
    return this.http.put(this.rootURL + '/UsersDetail/'+formData.UserId, formData);
  }

  deleteUser(id: number) {
    return this.http.delete(this.rootURL + '/UsersDetail/' + id);
  }

  getUserList() {
    this.http.get(this.rootURL + '/UsersDetail').toPromise()
      .then(response => this.listOfUsers = response as Users[]);
  }
}
