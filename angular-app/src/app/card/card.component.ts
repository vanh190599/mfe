import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],

    imports: [
        RouterLink
    ]
})
export class CardComponent {
  ngOnInit() {
    console.log(88888888)
  }
}
