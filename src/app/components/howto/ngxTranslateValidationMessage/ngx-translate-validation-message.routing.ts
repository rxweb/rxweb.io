
import { PageComponent } from "src/app/components/page/page.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
const NGX_TRANSLATE_VALIDATION_MESSAGE_ROUTES: Routes = [
{
	path:':typeName/:templateDrivenType',
	component:PageComponent
},
{
	path:':typeName',
	component:PageComponent
}

];
export const NGX_TRANSLATE_VALIDATION_MESSAGE_ROUTING: ModuleWithProviders = RouterModule.forChild(NGX_TRANSLATE_VALIDATION_MESSAGE_ROUTES);
