import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const AUTO_PUSH_FORM_GROUP_ROUTES: Routes = [
{
	path:':typeName/:templateDrivenType',
	component:PageComponent
},
{
	path:':typeName',
	component:PageComponent
}

];
export const AUTO_PUSH_FORM_GROUP_ROUTING: ModuleWithProviders = RouterModule.forChild(AUTO_PUSH_FORM_GROUP_ROUTES);