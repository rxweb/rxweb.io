import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ADDING_MUTILINGUAL_VALIDATION_MESSAGES_GLOBALLY_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const ADDING_MUTILINGUAL_VALIDATION_MESSAGES_GLOBALLY_ROUTING = RouterModule.forChild(ADDING_MUTILINGUAL_VALIDATION_MESSAGES_GLOBALLY_ROUTES);
