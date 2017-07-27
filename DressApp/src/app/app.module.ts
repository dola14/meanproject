import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RegistrationService} from './registration.service';
import { GetdressService } from './getdress.service';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './landing/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SingledressComponent } from './singledress/singledress.component';
import { Routes, RouterModule} from '@angular/router';
import { NewdressComponent } from './newdress/newdress.component';
import { NewdressService } from './newdress.service';

const routes: Routes = [
  {path:"", pathMatch: 'full', component: DashboardComponent}
 // {path:"", pathMatch: 'full', component: SingledressComponent}
 // {path:"dashboard/:id", component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    DashboardComponent,
    AboutComponent,
    DeliveryComponent,
    SingledressComponent,
    NewdressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RegistrationService, GetdressService, NewdressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
