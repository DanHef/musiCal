import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { DatesOverviewComponent } from '@src/app/dates-overview/dates-overview.component';
import { UserOverviewComponent } from '@src/app/user-overview/user-overview.component';
import { CreateUserComponent } from '@src/app/create-user/create-user.component';
import { CreateDateComponent } from '@src/app/create-date/create-date.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from '@src/app/common/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule} from '@src/app/material-design.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatesOverviewComponent,
    UserOverviewComponent,
    CreateUserComponent,
    CreateDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialDesignModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
