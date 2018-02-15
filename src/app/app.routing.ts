import { RouterModule } from '@angular/router';
import { BeersComponent } from './beers/beers.component';
import { StylesComponent } from './styles/styles.component';


export const routing = RouterModule.forRoot([
  {
    path: '',
    component: StylesComponent,
  },
  {
    path: 'beers/:category',
    component: BeersComponent,
  },
]);
