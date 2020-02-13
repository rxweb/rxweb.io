import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const SANITIZATION_ROUTES: Routes = [
{
	path:'blacklist',
	loadChildren: () => import('./blacklist/blacklist.module').then(m => m.BlacklistModule),
},
{
	path:'ltrim',
	loadChildren: () => import('./ltrim/ltrim.module').then(m => m.LtrimModule),
},
{
	path:'rtrim',
	loadChildren: () => import('./rtrim/rtrim.module').then(m => m.RtrimModule),
},
{
	path:'stripLow',
	loadChildren: () => import('./stripLow/strip-low.module').then(m => m.StripLowModule),
},
{
	path:'toBoolean',
	loadChildren: () => import('./toBoolean/to-boolean.module').then(m => m.ToBooleanModule),
},
{
	path:'toDate',
	loadChildren: () => import('./toDate/to-date.module').then(m => m.ToDateModule),
},
{
	path:'toDouble',
	loadChildren: () => import('./toDouble/to-double.module').then(m => m.ToDoubleModule),
},
{
	path:'toFloat',
	loadChildren: () => import('./toFloat/to-float.module').then(m => m.ToFloatModule),
},
{
	path:'toInt',
	loadChildren: () => import('./toInt/to-int.module').then(m => m.ToIntModule),
},
{
	path:'toString',
	loadChildren: () => import('./toString/to-string.module').then(m => m.ToStringModule),
},
{
	path:'trim',
	loadChildren: () => import('./trim/trim.module').then(m => m.TrimModule),
},
{
	path:'whitelist',
	loadChildren: () => import('./whitelist/whitelist.module').then(m => m.WhitelistModule),
},
{
	path:'escape',
	loadChildren: () => import('./escape/escape.module').then(m => m.EscapeModule),
},
{
	path:'sanitize',
	loadChildren: () => import('./sanitize/sanitize.module').then(m => m.SanitizeModule),
},
{
	path:'prefix',
	loadChildren: () => import('./prefix/prefix.module').then(m => m.PrefixModule),
},
{
	path:'suffix',
	loadChildren: () => import('./suffix/suffix.module').then(m => m.SuffixModule),
},
];
export const SANITIZATION_ROUTING: ModuleWithProviders = RouterModule.forChild(SANITIZATION_ROUTES);