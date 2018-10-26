import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { CreateDateComponent } from "./create-date/create-date.component";
import { DatesOverviewComponent } from "./dates-overview/dates-overview.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
        { path: 'createUser', component: CreateUserComponent },
        { path: 'createDate', component: CreateDateComponent},
        { path: 'datesOverview', component: DatesOverviewComponent},
    ] },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
