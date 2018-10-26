import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTableModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatButtonModule, MatTableModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatButtonModule, MatTableModule],
})
export class MaterialDesignModule { }