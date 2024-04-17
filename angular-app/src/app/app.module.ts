import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {CardComponent} from "./card/card.component";

const routes: Routes = [
  {
    path: 'card',
    component: CardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
