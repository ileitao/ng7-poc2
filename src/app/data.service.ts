import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  /**
   * Get a list containing users
   */
  getUsers() {
  	return this.http.get('https://reqres.in/api/users');
  }

  /**
   * Get a list containing users by the page number
   * @param {number} page page number
   */
  getUsersByPageNumber(page: number) {
    return this.http.get('https://reqres.in/api/users?page=' + page);
  }

  /**
   * Get a user by the id
   * @param {number} id user's id
   */
  getUserById(id: number) {
  	return this.http.get('https://reqres.in/api/users/' + id);
  }
}
