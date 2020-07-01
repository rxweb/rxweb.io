import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ADVANCE_FORM_DESIGN_ROUTES: Routes = [
{
	path:'nestedformarray',
	loadChildren: './nestedformarray/nestedformarray.module#NestedformarrayModule',
},
{
	path:'nestedformgroup',
	loadChildren: './nestedformgroup/nestedformgroup.module#NestedformgroupModule',
},
];
export const ADVANCE_FORM_DESIGN_ROUTING = RouterModule.forChild(ADVANCE_FORM_DESIGN_ROUTES);
