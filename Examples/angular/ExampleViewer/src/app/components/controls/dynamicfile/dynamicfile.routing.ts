import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DYNAMICFILE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DYNAMICFILE_ROUTING = RouterModule.forChild(DYNAMICFILE_ROUTES);
