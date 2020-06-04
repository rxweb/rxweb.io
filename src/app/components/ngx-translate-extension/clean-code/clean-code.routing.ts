import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';

const CLEAN_CODE_ROUTES: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'en/playground' },
  // { path: ':languageCode/playground', component: PlayGroundComponent },
  {
    path: 'clean-code-home',
    component: HomeComponent
  },
  {
    path: 'configuration',
    component: ConfigurationComponent
  }
];
export const CLEAN_CODE_ROUTING: ModuleWithProviders = RouterModule.forChild(CLEAN_CODE_ROUTES);
