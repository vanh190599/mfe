import { Route } from '@angular/router';
import {MyComponentComponent} from "./my-component/my-component.component";
import {AnohterComponentComponent} from "./anohter-component/anohter-component.component";

// The webpack configuration file at /routes-ng16/mfe1-ng16/webpack.config.js
// exposes a webpack module which contains this Angular routes array
export const STANDALONE_COMPONENTS_ROUTES: Route[] = [
  {
    path: 'my',
    component: MyComponentComponent,
  },
  {
    path: 'another',
    component: AnohterComponentComponent,
  },
];
