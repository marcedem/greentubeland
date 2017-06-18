import { Routes, RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { Location } from '@angular/common';

import {LocalizeRouterModule, LocalizeParser, StaticParserLoader} from 'localize-router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {ModuleWithProviders} from '@angular/core/src/metadata';
import {TranslateService} from '@ngx-translate/core';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const localizeRouting = LocalizeRouterModule.forRoot(appRoutes, {
    provide: LocalizeParser,
    useFactory: (translate, location, http) =>
        new StaticParserLoader(translate, location, http, '../assets/locales.json'),
    deps: [TranslateService, Location, Http]
});
export const routing = RouterModule.forRoot(appRoutes);
