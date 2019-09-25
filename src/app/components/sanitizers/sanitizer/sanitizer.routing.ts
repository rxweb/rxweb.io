import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const SANITIZER_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const SANITIZER_ROUTING: ModuleWithProviders = RouterModule.forChild(SANITIZER_ROUTES);
