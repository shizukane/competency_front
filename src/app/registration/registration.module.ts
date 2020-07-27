import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule
];

 
@NgModule({
  declarations: [ SignupComponent ],
  imports: [
    CommonModule,
    modules,
    SignupComponent,
],
 exports: [
   modules,
   SignupComponent
 ],
providers: [     
]
})

export class RegistrationModule { }
