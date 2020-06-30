import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const PUT_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const PUT_ROUTING = RouterModule.forChild(PUT_ROUTES);
