import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnSubmitComponent } from './on-submit/on-submit.component';
import { OnDirtyComponent } from './on-dirty/on-dirty.component';
import { OnTouchedComponent } from './on-touched/on-touched.component';
import { OnDirtyOrTouchedComponent } from './on-dirty-or-touched/on-dirty-or-touched.component';
import { OnDirtyOrSubmitComponent } from './on-dirty-or-submit/on-dirty-or-submit.component';
import { OnTouchedOrDirtyComponent } from './on-touched-or-dirty/on-touched-or-dirty.component';
import { OnTouchedOrSubmitComponent } from './on-touched-or-submit/on-touched-or-submit.component';
const ERROR_MESSAGE_STRATEGY_ROUTES: Routes = [
  {
    path: 'on-submit',
    component: OnSubmitComponent
  }, 
  {
    path: 'on-dirty',
    component: OnDirtyComponent
  },
  {
    path: 'on-touched',
    component: OnTouchedComponent
  },
  {
    path: 'on-dirty-or-touched',
    component: OnDirtyOrTouchedComponent
  },
  {
    path: 'on-dirty-or-submit',
    component: OnDirtyOrSubmitComponent
  },
  {
    path: 'on-touched-or-dirty',
    component: OnTouchedOrDirtyComponent
  },
  {
    path: 'on-touched-or-submit',
    component: OnTouchedOrSubmitComponent
  }
];
export const ERROR_MESSAGE_STRATEGY_ROUTING: ModuleWithProviders = RouterModule.forChild(ERROR_MESSAGE_STRATEGY_ROUTES);