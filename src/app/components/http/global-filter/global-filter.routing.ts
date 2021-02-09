import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const GLOBAL_FILTER_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}


];
export const GLOBAL_FILTER_ROUTING = RouterModule.forChild(GLOBAL_FILTER_ROUTES);
