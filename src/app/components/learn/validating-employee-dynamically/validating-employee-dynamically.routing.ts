import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const VALIDATING_EMPLOYEE_DYNAMICALLY_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const VALIDATING_EMPLOYEE_DYNAMICALLY_ROUTING = RouterModule.forChild(VALIDATING_EMPLOYEE_DYNAMICALLY_ROUTES);
