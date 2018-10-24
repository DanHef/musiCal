import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const SERVER_URL = "http://localhost:8888";

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(private http: HttpClient) { }

  create(date) {
    this.http.post(SERVER_URL + "/dates", date).subscribe((response) => {
      console.log("Successfully created new date");
    },
    (error) => {
      console.log(error);
    })
  }
}
