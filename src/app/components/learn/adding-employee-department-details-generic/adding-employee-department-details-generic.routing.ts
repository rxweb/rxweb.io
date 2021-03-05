import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ADDING_EMPLOYEE_DEPARTMENT_DETAILS_GENERIC_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const ADDING_EMPLOYEE_DEPARTMENT_DETAILS_GENERIC_ROUTING = RouterModule.forChild(ADDING_EMPLOYEE_DEPARTMENT_DETAILS_GENERIC_ROUTES);
