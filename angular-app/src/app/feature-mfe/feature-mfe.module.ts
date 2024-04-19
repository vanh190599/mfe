import { NgModule } from '@angular/core';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { RouterModule, Routes } from '@angular/router';
import {LayoutApp} from "./layout/app.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutApp,
    children: [
      {
        path: 'foo',
        component: FooComponent,
      },
      {
        path: 'bar',
        component: BarComponent,
      },
    ]
  },

];

@NgModule({
  declarations: [FooComponent, BarComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class FeatureMFEModule {}
