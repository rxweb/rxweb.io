import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const HOWTO_ROUTES: Routes = [
{
	path:'errorMessages',
	loadChildren: './errorMessages/error-messages.module#ErrorMessagesModule',
},
{
	path:'formData',
	loadChildren: './formData/form-data.module#FormDataModule',
},
{
	path:'fileObject',
	loadChildren: './fileObject/file-object.module#FileObjectModule',
},
{
	path:'dirtyCheck',
	loadChildren: './dirtyCheck/dirty-check.module#DirtyCheckModule',
},
{
	path:'resetForm',
	loadChildren: './resetForm/reset-form.module#ResetFormModule',
},
{
	path:'stronglyType',
	loadChildren: './stronglyType/strongly-type.module#StronglyTypeModule',
},
{
	path:'bindConfig',
	loadChildren: './bindConfig/bind-config.module#BindConfigModule',
},
{
	path:'patchModelValue',
	loadChildren: './patchModelValue/patch-model-value.module#PatchModelValueModule',
},
{
	path:'logicalOperators',
	loadChildren: './logicalOperators/logical-operators.module#LogicalOperatorsModule',
},
{
	path:'classAbstraction',
	loadChildren: './classAbstraction/class-abstraction.module#ClassAbstractionModule',
},
{
	path:'genericModel',
	loadChildren: './genericModel/generic-model.module#GenericModelModule',
},
{
	path:'errorMessageStrategy',
	loadChildren: './errorMessageStrategy/error-message-strategy.module#ErrorMessageStrategyModule',
},
{
	path:'commit',
	loadChildren: './commit/commit.module#CommitModule',
},
{
	path:'modifiedValue',
	loadChildren: './modifiedValue/modified-value.module#ModifiedValueModule',
},
{
	path:'conditionalControlDisable',
	loadChildren: './conditionalControlDisable/conditional-control-disable.module#ConditionalControlDisableModule',
},
{
	path:'autoPushFormGroup',
	loadChildren: './autoPushFormGroup/auto-push-form-group.module#AutoPushFormGroupModule',
},
{
	path:'ngxTranslateValidationMessage',
	loadChildren: './ngxTranslateValidationMessage/ngx-translate-validation-message.module#NgxTranslateValidationMessageModule',
},
{
	path:'greaterThanLessThanFormArray',
	loadChildren: './greaterThanLessThanFormArray/greater-than-less-than-form-array.module#GreaterThanLessThanFormArrayModule',
},
];
export const HOWTO_ROUTING = RouterModule.forChild(HOWTO_ROUTES);
