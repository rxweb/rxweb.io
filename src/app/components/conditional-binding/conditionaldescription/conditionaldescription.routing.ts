import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const CONDITIONALDESCRIPTION_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const CONDITIONALDESCRIPTION_ROUTING: ModuleWithProviders = RouterModule.forChild(CONDITIONALDESCRIPTION_ROUTES);
