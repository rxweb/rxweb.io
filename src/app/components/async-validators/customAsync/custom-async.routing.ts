import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const CUSTOM_ASYNC_ROUTES: Routes = [
{
	path:':typeName/:templateDrivenType',
	component:PageComponent
},
{
	path:':typeName',
	component:PageComponent
}

];
export const CUSTOM_ASYNC_ROUTING = RouterModule.forChild(CUSTOM_ASYNC_ROUTES);
