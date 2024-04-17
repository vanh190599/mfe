import { Component } from '@angular/core';
import logo from '../assets/angular.png'
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  myLogo = logo

  constructor(private router: Router) {
    console.log('app1 - components')
  }

  navigateToMy() {
    //this.router.navigateByUrl('/standalone/by').then(r => {}); // Đường dẫn đến route 'home'
    this.router.navigate(['/standalone/my']).then(r => {
      console.log('navigateToMy')
    }); // Sử dụng navigate
  }
}
