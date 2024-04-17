import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {CardComponent} from "./card/card.component";
import {STANDALONE_COMPONENTS_ROUTES} from "./remote-routes";

const routes: Routes = [
  {
    path: 'standalone',
    loadChildren: () =>
      import('./standalone-component.route')
        .then(m => m.STANDALONE_COMPONENTS_ROUTES)
  },
];

// const routes: Routes = [
//   {
//     path: 'card',
//     component: CardComponent
//   },
//   ...STANDALONE_COMPONENTS_ROUTES,
// ];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    // RouterModule.forChild(routes)
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    console.log('App1 - module')
  }
}
