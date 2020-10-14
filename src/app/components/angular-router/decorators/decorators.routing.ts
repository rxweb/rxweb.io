import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DECORATORS_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DECORATORS_ROUTING = RouterModule.forChild(DECORATORS_ROUTES);
