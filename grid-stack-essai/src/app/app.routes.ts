import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Design } from './design/design';



export const routes: Routes = [
    { path: '', component: Home },
  { path: 'designer', component:Design },

];
