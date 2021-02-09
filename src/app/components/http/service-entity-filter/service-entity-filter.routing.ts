import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const SERVICE_ENTITY_FILTER_ROUTES: Routes = [
	{
		path:'',
		component:PageComponent
	}

];
export const SERVICE_ENTITY_FILTER_ROUTING = RouterModule.forChild(SERVICE_ENTITY_FILTER_ROUTES);
