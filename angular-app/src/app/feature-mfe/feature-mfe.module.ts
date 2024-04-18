import { NgModule } from '@angular/core';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'foo',
    component: FooComponent,
  },
  {
    path: 'bar',
    component: BarComponent,
  },
];

@NgModule({
  declarations: [FooComponent, BarComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class FeatureMFEModule {}
