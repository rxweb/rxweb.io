import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ASYNC_VALIDATORS_ROUTES: Routes = [
{
	path:'alphaAsync',
  loadChildren: () => import('./alphaAsync/alpha-async.module').then(m => m.AlphaAsyncModule),
	
},
{
	path:'alphaNumericAsync',
  loadChildren: () => import('./alphaNumericAsync/alpha-numeric-async.module').then(m => m.AlphaNumericAsyncModule),
	
},
{
	path:'allOfAsync',
  loadChildren: () => import('./allOfAsync/all-of-async.module').then(m => m.AllOfAsyncModule),
	
},
{
	path:'choiceAsync',
  loadChildren: () => import('./choiceAsync/choice-async.module').then(m => m.ChoiceAsyncModule),
	
},
{
	path:'containsAsync',
  loadChildren: () => import('./containsAsync/contains-async.module').then(m => m.ContainsAsyncModule),
	
},
{
	path:'creditCardAsync',
  loadChildren: () => import('./creditCardAsync/credit-card-async.module').then(m => m.CreditCardAsyncModule),
	
},
{
	path:'customAsync',
  loadChildren: () => import('./customAsync/custom-async.module').then(m => m.CustomAsyncModule),
	
},
{
	path:'dateAsync',
  loadChildren: () => import('./dateAsync/date-async.module').then(m => m.DateAsyncModule),
	
},
{
	path:'endsWithAsync',
  loadChildren: () => import('./endsWithAsync/ends-with-async.module').then(m => m.EndsWithAsyncModule),
	
},
{
	path:'extensionAsync',
  loadChildren: () => import('./extensionAsync/extension-async.module').then(m => m.ExtensionAsyncModule),
	
},
{
	path:'factorAsync',
  loadChildren: () => import('./factorAsync/factor-async.module').then(m => m.FactorAsyncModule),
	
},
{
	path:'fileSizeAsync',
  loadChildren: () => import('./fileSizeAsync/file-size-async.module').then(m => m.FileSizeAsyncModule),
	
},
{
	path:'fileAsync',
  loadChildren: () => import('./fileAsync/file-async.module').then(m => m.FileAsyncModule),
	
},
{
	path:'greaterThanEqualToAsync',
  loadChildren: () => import('./greaterThanEqualToAsync/greater-than-equal-to-async.module').then(m => m.GreaterThanEqualToAsyncModule),
	
},
{
	path:'greaterThanAsync',
  loadChildren: () => import('./greaterThanAsync/greater-than-async.module').then(m => m.GreaterThanAsyncModule),
	
},
{
	path:'imageAsync',
  loadChildren: () => import('./imageAsync/image-async.module').then(m => m.ImageAsyncModule),
	
},
{
	path:'ibanAsync',
  loadChildren: () => import('./ibanAsync/iban-async.module').then(m => m.IbanAsyncModule),
	
},
{
	path:'ipAsync',
  loadChildren: () => import('./ipAsync/ip-async.module').then(m => m.IpAsyncModule),
	
},
{
	path:'lessThanEqualToAsync',
  loadChildren: () => import('./lessThanEqualToAsync/less-than-equal-to-async.module').then(m => m.LessThanEqualToAsyncModule),
	
},
{
	path:'lessThanAsync',
  loadChildren: () => import('./lessThanAsync/less-than-async.module').then(m => m.LessThanAsyncModule),
	
},
{
	path:'maxDateAsync',
  loadChildren: () => import('./maxDateAsync/max-date-async.module').then(m => m.MaxDateAsyncModule),
	
},
{
	path:'maxLengthAsync',
  loadChildren: () => import('./maxLengthAsync/max-length-async.module').then(m => m.MaxLengthAsyncModule),
	
},
{
	path:'maxNumberAsync',
  loadChildren: () => import('./maxNumberAsync/max-number-async.module').then(m => m.MaxNumberAsyncModule),
	
},
{
	path:'maxTimeAsync',
  loadChildren: () => import('./maxTimeAsync/max-time-async.module').then(m => m.MaxTimeAsyncModule),
	
},
{
	path:'minDateAsync',
  loadChildren: () => import('./minDateAsync/min-date-async.module').then(m => m.MinDateAsyncModule),
	
},
{
	path:'minLengthAsync',
  loadChildren: () => import('./minLengthAsync/min-length-async.module').then(m => m.MinLengthAsyncModule),
	
},
{
	path:'minNumberAsync',
  loadChildren: () => import('./minNumberAsync/min-number-async.module').then(m => m.MinNumberAsyncModule),
	
},
{
	path:'minTimeAsync',
  loadChildren: () => import('./minTimeAsync/min-time-async.module').then(m => m.MinTimeAsyncModule),
	
},
{
	path:'noneOfAsync',
  loadChildren: () => import('./noneOfAsync/none-of-async.module').then(m => m.NoneOfAsyncModule),
	
},
{
	path:'numericAsync',
  loadChildren: () => import('./numericAsync/numeric-async.module').then(m => m.NumericAsyncModule),
	
},
{
	path:'oneOfAsync',
  loadChildren: () => import('./oneOfAsync/one-of-async.module').then(m => m.OneOfAsyncModule),
	
},
{
	path:'passwordAsync',
  loadChildren: () => import('./passwordAsync/password-async.module').then(m => m.PasswordAsyncModule),
	
},
{
	path:'patternAsync',
  loadChildren: () => import('./patternAsync/pattern-async.module').then(m => m.PatternAsyncModule),
	
},
{
	path:'rangeAsync',
  loadChildren: () => import('./rangeAsync/range-async.module').then(m => m.RangeAsyncModule),
	
},
{
	path:'startsWithAsync',
  loadChildren: () => import('./startsWithAsync/starts-with-async.module').then(m => m.StartsWithAsyncModule),
	
},
{
	path:'timeAsync',
  loadChildren: () => import('./timeAsync/time-async.module').then(m => m.TimeAsyncModule),
	
},
{
	path:'urlAsync',
  loadChildren: () => import('./urlAsync/url-async.module').then(m => m.UrlAsyncModule),
	
},
];
export const ASYNC_VALIDATORS_ROUTING = RouterModule.forChild(ASYNC_VALIDATORS_ROUTES);
