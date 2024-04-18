import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {CardComponent} from "./card/card.component";
import {STANDALONE_COMPONENTS_ROUTES} from "./remote-routes";
import {MainComponent} from './main/main.component';
import {MyComponentComponent} from "./my-component/my-component.component";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'card',
        component: CardComponent,
      },
      {
        path: 'card/test',
        component: MyComponentComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
      {
        path: 'standalone',
        loadChildren: () => import('./standalone-component.route')
          .then(m => m.STANDALONE_COMPONENTS_ROUTES)
      },
    ]
  },
  {
    path: 'standalone',
    loadChildren: () => import('./standalone-component.route')
      .then(m => m.STANDALONE_COMPONENTS_ROUTES)
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    // RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    console.log('-- App1 - module')
  }
}
