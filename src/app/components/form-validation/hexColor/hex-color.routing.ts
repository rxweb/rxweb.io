import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const HEX_COLOR_ROUTES: Routes = [
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
export const HEX_COLOR_ROUTING = RouterModule.forChild(HEX_COLOR_ROUTES);
