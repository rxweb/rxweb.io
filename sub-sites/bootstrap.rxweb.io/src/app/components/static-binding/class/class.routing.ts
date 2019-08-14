import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const CLASS_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const CLASS_ROUTING: ModuleWithProviders = RouterModule.forChild(CLASS_ROUTES);
