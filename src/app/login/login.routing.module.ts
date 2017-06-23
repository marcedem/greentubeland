import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LocalizeRouterModule } from 'localize-router';

const loginRoutes: Routes = [
  { path: '',  component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes),
    LocalizeRouterModule.forChild(loginRoutes)
  ],
  exports: [ RouterModule, LocalizeRouterModule ]
})
export class LoginRoutingModule { }
