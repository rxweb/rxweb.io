import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const MULTILINGUAL_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const MULTILINGUAL_ROUTING = RouterModule.forChild(MULTILINGUAL_ROUTES);
