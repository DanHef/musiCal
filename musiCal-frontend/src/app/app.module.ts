import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DatesOverviewComponent } from './dates-overview/dates-overview.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateDateComponent } from './create-date/create-date.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './common/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule} from './material-design.module';

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
