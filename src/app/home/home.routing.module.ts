import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LocalizeRouterModule } from 'localize-router';
import { AuthGuard } from './../_guards/index';


const homeRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes),
    LocalizeRouterModule.forChild(homeRoutes)
  ],
  exports: [ RouterModule, LocalizeRouterModule ]
})
export class HomeRoutingModule { }
