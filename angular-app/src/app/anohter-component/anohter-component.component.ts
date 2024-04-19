import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-anohter-component',
  standalone: true,
  templateUrl: './anohter-component.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./anohter-component.component.scss']
})
export class AnohterComponentComponent {

}
