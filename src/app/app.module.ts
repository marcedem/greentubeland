import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';

// used for localize-router
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LocalizeRouterModule} from 'localize-router';
import {RouterModule} from '@angular/router';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';

// tslint:disable-next-line:import-spacing
import { AppComponent } from './app.component';
// import { routing, localizeRouting } from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent, HomeModule } from './home/index';
import { LoginComponent, LoginModule } from './login/index';
import { RegisterComponent, RegisterModule } from './register/index';
import { AppRoutingModule } from './app.routing.module';


export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, '/assets/locales/', '.json');
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [ Http ]
            }
        }),
        HomeModule,
        LoginModule,
        RegisterModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AlertComponent
        // HomeComponent,
        // LoginComponent,
        // RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
