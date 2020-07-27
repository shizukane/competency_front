import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from  '@angular/material/input'
import { MatRadioModule } from  '@angular/material/radio'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ProfileService } from './services/profile/profile.service';
import { UpdateProfileComponent } from './dashboard/update-profile/update-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    UpdateProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
