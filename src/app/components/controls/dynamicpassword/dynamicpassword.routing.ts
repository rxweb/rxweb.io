import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DYNAMICPASSWORD_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DYNAMICPASSWORD_ROUTING: ModuleWithProviders = RouterModule.forChild(DYNAMICPASSWORD_ROUTES);
