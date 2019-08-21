import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DYNAMICRESETFORM_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DYNAMICRESETFORM_ROUTING: ModuleWithProviders = RouterModule.forChild(DYNAMICRESETFORM_ROUTES);
