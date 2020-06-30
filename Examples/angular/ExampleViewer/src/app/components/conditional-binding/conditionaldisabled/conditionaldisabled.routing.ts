import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const CONDITIONALDISABLED_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const CONDITIONALDISABLED_ROUTING = RouterModule.forChild(CONDITIONALDISABLED_ROUTES);
