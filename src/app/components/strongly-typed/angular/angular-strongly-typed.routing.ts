import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ANGULAR_STRONGLY_TYPED_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const ANGULAR_STRONGLY_TYPED_ROUTING: ModuleWithProviders = RouterModule.forChild(ANGULAR_STRONGLY_TYPED_ROUTES);
