import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const MIN_TIME_ROUTES: Routes = [
{
	path:':typeName/:templateDrivenType',
	component:PageComponent
},
{
	path:':typeName',
	component:PageComponent
}

];
export const MIN_TIME_ROUTING: ModuleWithProviders = RouterModule.forChild(MIN_TIME_ROUTES);
