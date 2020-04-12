import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material/core';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatButtonModule, MatTableModule,
        MatDatepickerModule, MatFormFieldModule, MatInputModule, MatIconModule, MatNativeDateModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatButtonModule, MatTableModule,
        MatDatepickerModule, MatFormFieldModule, MatInputModule, MatIconModule, MatNativeDateModule],
})
export class MaterialDesignModule { }