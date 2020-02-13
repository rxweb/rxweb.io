import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ADVANCE_FORM_DESIGN_ROUTES: Routes = [
{
	path:'nestedformarray',
	loadChildren: () => import('./nestedformarray/nestedformarray.module').then(m => m.NestedformarrayModule),
},
{
	path:'nestedformgroup',
	loadChildren: () => import('./nestedformgroup/nestedformgroup.module').then(m => m.NestedformgroupModule),
},
];
export const ADVANCE_FORM_DESIGN_ROUTING: ModuleWithProviders = RouterModule.forChild(ADVANCE_FORM_DESIGN_ROUTES);
