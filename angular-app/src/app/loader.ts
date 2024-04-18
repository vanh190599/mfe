/*import { AppComponent } from './app.component';

export default {
  framework: 'angular',
  component: AppComponent
}*/

// const appWidgetLoader = {
//   config: {
//     identifier: 'DEMO_APP',
//     name: 'Demo app',
//     category: 'ANGULAR',
//     isApp: true,
//     appName: 'Sample App', // TODO: display this in nav bar
//     // appIcon: 'pi-check',
//     baseUrl: 'my-widget1',
//     navbar: {
//       collapseOnLoad: true,
//       // canToggle: false,
//       links: [
//         {
//           label: 'Favorites',
//           routerLink: '/favorites',
//           icon: 'pi pi-folder',
//           children: [
//             {
//               label: 'Dashboard',
//               routerLink: '/bar',
//               icon: 'pi pi-home',
//             },
//             {
//               label: 'Foo',
//               routerLink: '/foo',
//               icon: 'pi pi-bookmark',
//             },
//             {
//               label: 'Foo A',
//               routerLink: '/foo/a',
//               icon: 'pi pi-chart',
//             },
//           ],
//         },
//         {
//           label: 'Foo',
//           routerLink: '/foo',
//           icon: 'pi pi-home',
//         },
//       ],
//     },
//   },
//   module: {
//     key: 'AppModule',
//     loader: () => import('./app.module'),
//   },
// };
//
// export {
//   appWidgetLoader,
// };



// app widget loader
const appWidgetLoader = {
  module: {
    key: 'AppModule',
    // loader: () => import('./app.module'),
  }
}
export {
  appWidgetLoader
}
