import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ALL_OF_ROUTES: Routes = [
	{
		path:"decorators",
		component:PageComponent
	},
	{
		path:"validators",
		component:PageComponent
	}

];
export const ALL_OF_ROUTING = RouterModule.forChild(ALL_OF_ROUTES);
