import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const SOURCE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const SOURCE_ROUTING: ModuleWithProviders = RouterModule.forChild(SOURCE_ROUTES);
