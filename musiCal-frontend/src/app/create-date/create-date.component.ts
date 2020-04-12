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
        const fromDate = new Date(this.fromDate.value + 'T' + this.fromTime.value);
        const toDate = new Date(this.toDate.value + 'T' + this.toTime.value);


        this.dateService.create(fromDate, toDate, this.description.value, this.type.value);
    }

}
