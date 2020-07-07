import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from '../../page/page.component';

const ALPHA_ROUTES: Routes = [
	{
		path:"decorators",
		component:PageComponent
	},
	{
		path:"validators",
		component:PageComponent
	},
	{
		path:"template-driven/directives",
		component:PageComponent
	},
	{
		path:"template-driven/decorators",
		component:PageComponent
	}
];
export const ALPHA_ROUTING = RouterModule.forChild(ALPHA_ROUTES);
