import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ADVANCE_FORMS_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const ADVANCE_FORMS_ROUTING = RouterModule.forChild(ADVANCE_FORMS_ROUTES);
