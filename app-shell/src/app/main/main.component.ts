import {Component, QueryList, ViewChildren} from '@angular/core';
import {loadRemoteModule} from '../utils/federation-utils';
import {AppService} from '../app.service';

const remoteModules = [
  {
    remoteEntry: 'http://localhost:3000/remoteEntry.js',
    remoteName: 'vue_app',
    exposedModule: 'VueAppLoader',
  },
  {
    remoteEntry: 'http://localhost:3001/remoteEntry.js',
    remoteName: 'angular_app',
    exposedModule: 'AngularAppLoader',
  },
  {
    remoteEntry: 'http://localhost:3002/remoteEntry.js',
    remoteName: 'react_app',
    exposedModule: 'ReactAppLoader',
  },
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @ViewChildren('comp') components!: QueryList<any>;
  loaders: any = [];

  constructor(readonly appService: AppService) {
  }

  async ngAfterViewInit() {
    console.log("-- MainComponent:")
    console.log(this.appService.authorized_modules)
    this.appService.authorized_modules = remoteModules;

    for (const m of this.appService.authorized_modules) {
      loadRemoteModule(m).then((module) => {
        this.loaders.push(module.default);
      });
    }
  }

  logout() {
    window.location.reload();
  }
}
