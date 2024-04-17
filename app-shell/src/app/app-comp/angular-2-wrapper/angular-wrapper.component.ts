import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {loadRemoteModule} from "../../utils/federation-utils";

@Component({
  selector: 'app-angular-2-wrapper',
  templateUrl: './angular-wrapper.component.html',
  styleUrls: ['./angular-wrapper.component.scss'],
  standalone: true
})

export class AngularWrapperComponent2 {
  @ViewChild('root') root!: ViewContainerRef


  constructor(private readonly viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    const module = {
      remoteEntry: 'http://localhost:3003/remoteEntry.js',
      remoteName: 'angular_app_2',
      exposedModule: 'AngularApp2Loader',
    };

    loadRemoteModule(module).then((module) => {
      this.viewContainerRef.createComponent((module.default).component, {});
    });
  }
}
