import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create(user) {
    this.http.post("http://localhost:8888/users", user).subscribe((response) => {
      console.log(response);
    });
  }
}
