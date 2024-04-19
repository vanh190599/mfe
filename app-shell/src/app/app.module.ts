import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ReactWrapperComponent } from './wrappers/react-wrapper/react-wrapper.component';
import { VueWrapperComponent } from './wrappers/vue-wrapper/vue-wrapper.component';
import { AngularWrapperComponent } from './wrappers/angular-wrapper/angular-wrapper.component';
import {Angular2WrapperComponent} from "./wrappers/angular-2-wrapper/angular-2-wrapper.component";
import { WrapperStateComponent } from './wrapper-state/wrapper-state.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ReactWrapperComponent,
    VueWrapperComponent,
    AngularWrapperComponent,
    Angular2WrapperComponent,
    WrapperStateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
    providers: [],
    exports: [
        AngularWrapperComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
