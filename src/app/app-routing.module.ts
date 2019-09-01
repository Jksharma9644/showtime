import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllshowsComponent } from './allshows/allshows.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
const routes: Routes = [
  {
    path:"",
    component:AllshowsComponent
  },
  {
    path:"showdetails/:id",
    component:ShowdetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
