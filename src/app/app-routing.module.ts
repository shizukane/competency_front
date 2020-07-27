import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './dashboard/profile/profile.component';
import {UpdateProfileComponent} from './dashboard/update-profile/update-profile.component';


const routes: Routes = [
  { path: "profile", component: ProfileComponent },
  { path: "edit", component: UpdateProfileComponent },
  { path: "**", redirectTo: "profile" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
