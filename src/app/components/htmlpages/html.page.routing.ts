import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlPageComponent } from './html.page.component';

const TEXT_PAGE_ROUTES: Routes = [
{
  path: ':rootFolder/:fileName', component: HtmlPageComponent
},
{
    path: ':rootFolder/:nestedFolder/:fileName', component: HtmlPageComponent
  }
  ,
{
    path: ':rootFolder/:nestedFolder/:childFolder/:fileName', component: HtmlPageComponent
  }
];

export const HTML_PAGE_ROUTING = RouterModule.forChild(TEXT_PAGE_ROUTES);
