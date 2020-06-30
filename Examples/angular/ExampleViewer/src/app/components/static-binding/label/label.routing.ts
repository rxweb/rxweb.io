import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const LABEL_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const LABEL_ROUTING = RouterModule.forChild(LABEL_ROUTES);
