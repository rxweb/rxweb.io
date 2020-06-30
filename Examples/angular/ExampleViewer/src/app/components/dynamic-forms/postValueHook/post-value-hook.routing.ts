import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const POST_VALUE_HOOK_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const POST_VALUE_HOOK_ROUTING = RouterModule.forChild(POST_VALUE_HOOK_ROUTES);
