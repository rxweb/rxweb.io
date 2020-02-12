import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const OVERRIDE_PROPS_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const OVERRIDE_PROPS_ROUTING: ModuleWithProviders = RouterModule.forChild(OVERRIDE_PROPS_ROUTES);
