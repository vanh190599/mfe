import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {AuthGuard} from './auth.guard';
import {Main2Component} from "./main2/main.component";
import {AngularWrapperComponent2} from "./app-comp/angular-2-wrapper/angular-wrapper.component";
// import {loadRemoteModule} from "./utils/federation-utils";
import { loadRemoteModule } from '@angular-architects/module-federation';

// import remoteAngular1Routes from 'app2/routes';

const routes: Routes = [
  {
    path: 'main2',
    component: Main2Component
  },
  {
    path: 'mfe',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'angular_app',
        exposedModule: 'AngularAppRoute',
      }).then((m) => m.STANDALONE_COMPONENTS_ROUTES)
        .catch((err) =>
          console.error('Error lazy loading standalone-routes', err)
        ),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: 'main'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
