import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-my-component',
  standalone: true,
  templateUrl: './my-component.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent {
  constructor() {
    console.log("-- MyComponentComponent")
  }
}
