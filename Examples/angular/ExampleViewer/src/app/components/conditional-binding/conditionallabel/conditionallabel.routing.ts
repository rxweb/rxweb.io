import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const CONDITIONALLABEL_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const CONDITIONALLABEL_ROUTING = RouterModule.forChild(CONDITIONALLABEL_ROUTES);
