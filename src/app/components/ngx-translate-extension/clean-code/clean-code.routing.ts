import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComparingOnPushComponent } from './on-push/on-push.component';

const CLEAN_CODE_ROUTES: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'en/playground' },
  // { path: ':languageCode/playground', component: PlayGroundComponent },
  {
    path: 'on-push',
    component: ComparingOnPushComponent
  }
];
export const CLEAN_CODE_ROUTING: ModuleWithProviders = RouterModule.forChild(CLEAN_CODE_ROUTES);
