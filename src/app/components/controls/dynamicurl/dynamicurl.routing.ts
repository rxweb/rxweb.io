import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DYNAMICURL_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DYNAMICURL_ROUTING: ModuleWithProviders = RouterModule.forChild(DYNAMICURL_ROUTES);
