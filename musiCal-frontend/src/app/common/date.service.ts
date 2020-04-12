import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

const SERVER_URL = "http://localhost:8888";

@Injectable({
    providedIn: 'root'
})
export class DateService {

    constructor(private http: HttpClient) { }

    create(fromDate, toDate, description, type) {
        const date = {
            fromDate,
            toDate,
            description,
            type
        };

        this.http.post(SERVER_URL + '/events', date).subscribe((response) => {
            console.log('Successfully created new date');
        },
            (error) => {
                console.log(error);
            });
    }

    getAllDates(): Promise<Object> {
        const transformDateString = map<any, any>((dateObjects) => {
            /*for (let i = 0; i < dateObjects.length; i++) {
                dateObjects[i].fromDay = dateObjects[i].fromDate;
                dateObjects[i].toDay = dateObjects[i].toDate;
            };*/

            return dateObjects;
        });

        return this.http.get(SERVER_URL + '/events').pipe(transformDateString).toPromise();
    }


    private formatDateField(date: Date): string {
        return date.getFullYear().toString() + ( date.getMonth() + 1 ) + date.getDate();
    }

    private formatTimeField(time: string): string {
        const timeFormat = /^([0-9]{2})\:([0-9]{2})$/;

        if(timeFormat.test(time) == false) {
            const numberCheck = /[0-9]/;
            if (numberCheck.test(time) == false) {
                // only numbers are allowed in the time field
                return null;
            }

            let formattedTime;
            // take first two numbers as hours
            formattedTime = time.toString().substr(0,2);

            // take second two numbers as minutes
            formattedTime = formattedTime + time.toString().substr(2,4);
        } else {
            return time;
        }
    }


    private createDateObject(dateString): Date {
        const newDateObject = new Date();

        newDateObject.setFullYear(parseInt(dateString.substr(0,4)), parseInt(dateString.substr(4,2)) - 1, parseInt(dateString.substr(6,2)));

        return newDateObject;
    }
}
