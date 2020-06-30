import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const LIST_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const LIST_ROUTING = RouterModule.forChild(LIST_ROUTES);
