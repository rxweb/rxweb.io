import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const CONDITIONAL_BINDING_ROUTES: Routes = [
{
	path:'conditionalclass',
	loadChildren: './conditionalclass/conditionalclass.module#ConditionalclassModule',
},
{
	path:'conditionaldescription',
	loadChildren: './conditionaldescription/conditionaldescription.module#ConditionaldescriptionModule',
},
{
	path:'conditionaldisabled',
	loadChildren: './conditionaldisabled/conditionaldisabled.module#ConditionaldisabledModule',
},
{
	path:'conditionalhide',
	loadChildren: './conditionalhide/conditionalhide.module#ConditionalhideModule',
},
{
	path:'conditionallabel',
	loadChildren: './conditionallabel/conditionallabel.module#ConditionallabelModule',
},
{
	path:'conditionalplaceholder',
	loadChildren: './conditionalplaceholder/conditionalplaceholder.module#ConditionalplaceholderModule',
},
{
	path:'conditionalreadonly',
	loadChildren: './conditionalreadonly/conditionalreadonly.module#ConditionalreadonlyModule',
},
{
	path:'conditionalvalue',
	loadChildren: './conditionalvalue/conditionalvalue.module#ConditionalvalueModule',
},
];
export const CONDITIONAL_BINDING_ROUTING = RouterModule.forChild(CONDITIONAL_BINDING_ROUTES);
