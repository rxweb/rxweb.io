import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const FORMGROUP_CLASS_INSTANCE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const FORMGROUP_CLASS_INSTANCE_ROUTING = RouterModule.forChild(FORMGROUP_CLASS_INSTANCE_ROUTES);
