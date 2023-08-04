import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BookingComponent } from './booking/booking.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'book',component:BookingComponent},
  {path:'contact', component:ContactusComponent},
  {path:'new', component:NewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
