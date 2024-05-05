import { Routes } from '@angular/router';
import {TheHomePageComponent} from "./public/pages/the-home-page/the-home-page.component";
import {ThePageNotfoundComponent} from "./public/pages/the-page-notfound/the-page-notfound.component";
import {TheRecordsPageComponent} from "./marathon/pages/the-records-page/the-records-page.component";

export const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:TheHomePageComponent},
  {path:'',redirectTo:'/marathon',pathMatch:'full'},
  {path:'marathon/records',component:TheRecordsPageComponent},
  {path:'**', component:ThePageNotfoundComponent}
];
