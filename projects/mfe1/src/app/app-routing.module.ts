import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shared',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        exposedModule: './Module'
      }).then(m => m.SharedModule)
  }
];