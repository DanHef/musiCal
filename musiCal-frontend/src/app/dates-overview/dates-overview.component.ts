import { Component, OnInit } from '@angular/core';
import { DateService } from '../common/date.service';

@Component({
    selector: 'app-dates-overview',
    templateUrl: './dates-overview.component.html',
    styleUrls: ['./dates-overview.component.css']
})
export class DatesOverviewComponent implements OnInit {

    displayedColumns: string[] = ['fromDate', 'fromTime', 'toDate', 'toTime', 'description', 'type'];
    dates: any;

    constructor(private readonly dateService: DateService) { }

    async ngOnInit() {
        this.dates = await this.dateService.getAllDates();
    }

}
