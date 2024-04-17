import {Component, QueryList, ViewChildren} from '@angular/core';
import {loadRemoteModule} from '../utils/federation-utils';
import {AppService} from '../app.service';
import {AngularWrapperComponent1} from "../app-comp/angular-wrapper/angular-wrapper.component";
import {AngularWrapperComponent2} from "../app-comp/angular-2-wrapper/angular-wrapper.component";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

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
  imports: [
    AngularWrapperComponent1,
    AngularWrapperComponent2,
    NgIf,
    RouterLink
  ],
  standalone: true
})

export class Main2Component {
  @ViewChildren('comp') components!: QueryList<any>;
  loaders: any = [];
  queryParams: any;


  constructor(readonly appService: AppService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.queryParams = params;
    });
  }

  async ngAfterViewInit() {
    console.log("-- MainComponent:")

    for (const m of remoteModules) {
      loadRemoteModule(m).then((module) => {
        this.loaders.push(module.default);
      });
    }
  }
}
