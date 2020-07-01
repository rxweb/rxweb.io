import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const RADIO_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const RADIO_ROUTING = RouterModule.forChild(RADIO_ROUTES);
