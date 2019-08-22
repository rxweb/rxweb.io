import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const VALUE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const VALUE_ROUTING: ModuleWithProviders = RouterModule.forChild(VALUE_ROUTES);
