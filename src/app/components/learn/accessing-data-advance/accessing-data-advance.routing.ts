import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ACCESSING_DATA_ADVANCE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const ACCESSING_DATA_ADVANCE_ROUTING = RouterModule.forChild(ACCESSING_DATA_ADVANCE_ROUTES);
