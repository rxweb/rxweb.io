import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const TEXTBOX_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const TEXTBOX_ROUTING = RouterModule.forChild(TEXTBOX_ROUTES);
