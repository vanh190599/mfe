import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { loadRemoteModule } from './utils/federation-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'viblo-module-federation';

  constructor(
    private readonly router: Router
  ) {}

  async ngOnInit() {
    const authorized_modules = [
      {
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'angular_app',
        exposedModule: 'AngularAppLoader',
      },
    ];
    for (const m of authorized_modules) {
      const moduleLoader = await loadRemoteModule(m);

      for (const loader in moduleLoader) {
        const moduleExportName = moduleLoader[loader].module.export;

        // this load module synchronous, therefore the loadChildren below is actually "not lazy load"
        // To improve: only when user enter this page then we call loader()
        const module = await moduleLoader[loader].module.loader();
        this.router.config.push({
          path: 'feature-mfe',
          loadChildren: () => module[moduleExportName],
        });
      }
    }
  }
}
