import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { LocalizeRouterModule } from 'localize-router';

const registerRoutes: Routes = [
  { path: '',  component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(registerRoutes),
    LocalizeRouterModule.forChild(registerRoutes)
  ],
  exports: [ RouterModule, LocalizeRouterModule ]
})

export class RegisterRoutingModule { }
