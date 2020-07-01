import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DYNAMICERRORMESSAGESTRATEGY_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DYNAMICERRORMESSAGESTRATEGY_ROUTING = RouterModule.forChild(DYNAMICERRORMESSAGESTRATEGY_ROUTES);
