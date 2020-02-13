import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const CONDITIONAL_BINDING_ROUTES: Routes = [
{
	path:'conditionalclass',
	loadChildren: () => import('./conditionalclass/conditionalclass.module').then(m => m.ConditionalclassModule),
},
{
	path:'conditionaldescription',
	loadChildren: () => import('./conditionaldescription/conditionaldescription.module').then(m => m.ConditionaldescriptionModule),
},
{
	path:'conditionaldisabled',
	loadChildren: () => import('./conditionaldisabled/conditionaldisabled.module').then(m => m.ConditionaldisabledModule),
},
{
	path:'conditionalhide',
	loadChildren: () => import('./conditionalhide/conditionalhide.module').then(m => m.ConditionalhideModule),
},
{
	path:'conditionallabel',
	loadChildren: () => import('./conditionallabel/conditionallabel.module').then(m => m.ConditionallabelModule),
},
{
	path:'conditionalplaceholder',
	loadChildren: () => import('./conditionalplaceholder/conditionalplaceholder.module').then(m => m.ConditionalplaceholderModule),
},
{
	path:'conditionalreadonly',
	loadChildren: () => import('./conditionalreadonly/conditionalreadonly.module').then(m => m.ConditionalreadonlyModule),
},
{
	path:'conditionalvalue',
	loadChildren: () => import('./conditionalvalue/conditionalvalue.module').then(m => m.ConditionalvalueModule),
},
];
export const CONDITIONAL_BINDING_ROUTING: ModuleWithProviders = RouterModule.forChild(CONDITIONAL_BINDING_ROUTES);
