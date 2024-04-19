import {Component, QueryList, ViewChildren} from '@angular/core';
import {loadRemoteModule} from '../utils/federation-utils';
import {AppService} from '../app.service';

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

    const remoteModules = [
      {
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'vue_app',
        exposedModule: 'VueAppLoader',
      },
      // {
      //   remoteEntry: 'http://localhost:3001/remoteEntry.js',
      //   remoteName: 'angular_app',
      //   exposedModule: 'AngularAppLoader',
      // },
      {
        remoteEntry: 'http://localhost:3003/remoteEntry.js',
        remoteName: 'angular_app_2',
        exposedModule: 'AngularApp2Loader',
      },
      {
        remoteEntry: 'http://localhost:3002/remoteEntry.js',
        remoteName: 'react_app',
        exposedModule: 'ReactAppLoader',
      },
    ];

    for (const m of remoteModules) {
      loadRemoteModule(m).then((module) => {
        this.loaders.push(module.default);
      });
    }
  }
}
