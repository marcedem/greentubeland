import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterRoutingModule } from './register.routing.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
     BrowserModule,
    FormsModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
