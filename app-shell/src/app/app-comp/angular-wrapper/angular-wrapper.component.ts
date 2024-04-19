import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {loadRemoteModule} from "../../utils/federation-utils";

@Component({
  selector: 'app-angular-1-wrapper',
  templateUrl: './angular-wrapper.component.html',
  styleUrls: ['./angular-wrapper.component.scss'],
  standalone: true
})

export class AngularWrapperComponent1 {
  @ViewChild('root') root!: ViewContainerRef


  constructor(private readonly viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    const module = {
      remoteEntry: 'http://localhost:3001/remoteEntry.js',
      remoteName: 'angular_app',
      exposedModule: 'AngularAppComponent',
    };

    loadRemoteModule(module).then((module) => {
      console.log(module.AppComponent)
      this.viewContainerRef.createComponent(module.AppComponent, {});
    });
  }
}
