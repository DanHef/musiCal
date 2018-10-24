import { Component, OnInit } from '@angular/core';
import { DateService } from "../common/date.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-create-date',
  templateUrl: './create-date.component.html',
  styleUrls: ['./create-date.component.css']
})
export class CreateDateComponent implements OnInit {
  fromDate = new FormControl('');
  fromTime = new FormControl('');
  toDate = new FormControl('');
  toTime = new FormControl('');
  description = new FormControl('');
  type = new FormControl('');

  constructor(private readonly dateService: DateService) { }

  ngOnInit() {
  }

  createDate() {
    this.dateService.create({
      "fromDay": this.fromDate.value,
      "fromTime": this.fromTime.value,
      "toDay": this.toDate.value,
      "toTime": this.toTime.value,
      "description": this.description.value,
      "dateType": this.type.value
    });
  }

}
