import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const POST_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const POST_ROUTING = RouterModule.forChild(POST_ROUTES);
