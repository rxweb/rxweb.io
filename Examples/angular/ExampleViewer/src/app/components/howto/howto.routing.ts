import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const HOWTO_ROUTES: Routes = [
{
	path:'errorMessages',
	loadChildren: () => import('./errorMessages/error-messages.module').then(m => m.ErrorMessagesModule),
},
{
	path:'formData',
	loadChildren: () => import('./formData/form-data.module').then(m => m.FormDataModule),
},
{
	path:'fileObject',
	loadChildren: () => import('./fileObject/file-object.module').then(m => m.FileObjectModule),
},
{
	path:'dirtyCheck',
	loadChildren: () => import('./dirtyCheck/dirty-check.module').then(m => m.DirtyCheckModule),
},
{
	path:'resetForm',
	loadChildren: () => import('./resetForm/reset-form.module').then(m => m.ResetFormModule),
},
{
	path:'stronglyType',
	loadChildren: () => import('./stronglyType/strongly-type.module').then(m => m.StronglyTypeModule),
},
{
	path:'bindConfig',
	loadChildren: () => import('./bindConfig/bind-config.module').then(m => m.BindConfigModule),
},
{
	path:'patchModelValue',
	loadChildren: () => import('./patchModelValue/patch-model-value.module').then(m => m.PatchModelValueModule),
},
{
	path:'logicalOperators',
	loadChildren: () => import('./logicalOperators/logical-operators.module').then(m => m.LogicalOperatorsModule),
},
{
	path:'classAbstraction',
	loadChildren: () => import('./classAbstraction/class-abstraction.module').then(m => m.ClassAbstractionModule),
},
{
	path:'genericModel',
	loadChildren: () => import('./genericModel/generic-model.module').then(m => m.GenericModelModule),
},
{
	path:'errorMessageStrategy',
	loadChildren: () => import('./errorMessageStrategy/error-message-strategy.module').then(m => m.ErrorMessageStrategyModule),
},
{
	path:'commit',
	loadChildren: () => import('./commit/commit.module').then(m => m.CommitModule),
},
{
	path:'modifiedValue',
	loadChildren: () => import('./modifiedValue/modified-value.module').then(m => m.ModifiedValueModule),
},
{
	path:'conditionalControlDisable',
	loadChildren: () => import('./conditionalControlDisable/conditional-control-disable.module').then(m => m.ConditionalControlDisableModule),
},
{
	path:'autoPushFormGroup',
	loadChildren: () => import('./autoPushFormGroup/auto-push-form-group.module').then(m => m.AutoPushFormGroupModule),
},
{
	path:'greaterThanLessThanFormArray',
	loadChildren: () => import('./greaterThanLessThanFormArray/greater-than-less-than-form-array.module').then(m => m.GreaterThanLessThanFormArrayModule),
},
{
	path:'ngxTranslateValidationMessage',
	loadChildren: () => import('./ngxTranslateValidationMessage/ngx-translate-validation-message.module').then(m => m.NgxTranslateValidationMessageModule),
},
];
export const HOWTO_ROUTING: ModuleWithProviders = RouterModule.forChild(HOWTO_ROUTES);