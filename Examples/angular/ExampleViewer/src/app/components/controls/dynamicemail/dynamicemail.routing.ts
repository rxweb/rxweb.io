import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DYNAMICEMAIL_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DYNAMICEMAIL_ROUTING = RouterModule.forChild(DYNAMICEMAIL_ROUTES);
