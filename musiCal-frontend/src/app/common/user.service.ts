import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const server_url = "http://localhost:8888";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create(user) {
    this.http.post(server_url + "/users", user).subscribe((response) => {
      console.log(response);
    });
  }
}
