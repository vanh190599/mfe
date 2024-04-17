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
      exposedModule: 'AngularAppLoader',
    };

    loadRemoteModule(module).then((module) => {
      this.viewContainerRef.createComponent((module.default).component, {});
    });

    // Tạo một instance của component được truyền vào và đặt nó vào trong view container
    // const compRef = this.viewContainerRef.createComponent(this.component, {});
  }
}
