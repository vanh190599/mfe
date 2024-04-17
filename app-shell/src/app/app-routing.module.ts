import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth.guard';
import {Main2Component} from "./main2/main.component";
import {AngularWrapperComponent2} from "./app-comp/angular-2-wrapper/angular-wrapper.component";

const routes: Routes = [
  {
    path: 'main2',
    component: Main2Component
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: '**',
    redirectTo: 'main'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
