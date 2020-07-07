import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ENDS_WITH_ROUTES: Routes = [
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
export const ENDS_WITH_ROUTING = RouterModule.forChild(ENDS_WITH_ROUTES);
