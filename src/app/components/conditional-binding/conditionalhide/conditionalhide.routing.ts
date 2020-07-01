import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const CONDITIONALHIDE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const CONDITIONALHIDE_ROUTING = RouterModule.forChild(CONDITIONALHIDE_ROUTES);
