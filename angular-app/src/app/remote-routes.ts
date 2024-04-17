import {CardComponent} from "./card/card.component";
import {Route} from "@angular/router";

export const STANDALONE_COMPONENTS_ROUTES: Route[] =[
  {
    path: 'card1',
    component: CardComponent,
  },
];
