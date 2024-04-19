import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import {CardComponent} from './card/card.component';
import {STANDALONE_COMPONENTS_ROUTES} from './remote-routes';
import {MainComponent} from './main/main.component';
import {MyComponentComponent} from './my-component/my-component.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {FeatureMFEModule} from './feature-mfe/feature-mfe.module';

const routes: Routes = [
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
    path: 'standalone',
    loadChildren: () =>
      import('./standalone-component.route').then(
        (m) => m.STANDALONE_COMPONENTS_ROUTES
      ),
  },
  {
    path: '',
    loadChildren: () => FeatureMFEModule
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [AppComponent, MainComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('-- App1 - module');
  }
}
