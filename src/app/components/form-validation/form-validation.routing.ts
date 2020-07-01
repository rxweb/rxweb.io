import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const FORM_VALIDATION_ROUTES: Routes = [
{
	path:'allOf',
	loadChildren: () => import('./allOf/all-of.module').then(m => m.AllOfModule),
},
{
	path:'alpha',
	loadChildren: () => import('./alpha/alpha.module').then(m => m.AlphaModule),
},
{
	path:'alphaNumeric',
	loadChildren: () => import('./alphaNumeric/alpha-numeric.module').then(m => m.AlphaNumericModule),
},
{
	path:'async',
	loadChildren: () => import('./async/async.module').then(m => m.AsyncModule),
},
{
	path:'ascii',
	loadChildren: () => import('./ascii/ascii.module').then(m => m.AsciiModule),
},
{
	path:'choice',
	loadChildren: () => import('./choice/choice.module').then(m => m.ChoiceModule),
},
{
	path:'compose',
	loadChildren: () => import('./compose/compose.module').then(m => m.ComposeModule),
},
{
	path:'compare',
	loadChildren: () => import('./compare/compare.module').then(m => m.CompareModule),
},
{
	path:'contains',
	loadChildren: () => import('./contains/contains.module').then(m => m.ContainsModule),
},
{
	path:'cusip',
	loadChildren: () => import('./cusip/cusip.module').then(m => m.CusipModule),
},
{
	path:'creditCard',
	loadChildren: () => import('./creditCard/credit-card.module').then(m => m.CreditCardModule),
},
{
	path:'dataUri',
	loadChildren: () => import('./dataUri/data-uri.module').then(m => m.DataUriModule),
},
{
	path:'date',
	loadChildren: () => import('./date/date.module').then(m => m.DateModule),
},
{
	path:'different',
	loadChildren: () => import('./different/different.module').then(m => m.DifferentModule),
},
{
	path:'digit',
	loadChildren: () => import('./digit/digit.module').then(m => m.DigitModule),
},
{
	path:'email',
	loadChildren: () => import('./email/email.module').then(m => m.EmailModule),
},
{
	path:'endsWith',
	loadChildren: () => import('./endsWith/ends-with.module').then(m => m.EndsWithModule),
},
{
	path:'even',
	loadChildren: () => import('./even/even.module').then(m => m.EvenModule),
},
{
	path:'extension',
	loadChildren: () => import('./extension/extension.module').then(m => m.ExtensionModule),
},
{
	path:'factor',
	loadChildren: () => import('./factor/factor.module').then(m => m.FactorModule),
},
{
	path:'fileSize',
	loadChildren: () => import('./fileSize/file-size.module').then(m => m.FileSizeModule),
},
{
	path:'file',
	loadChildren: () => import('./file/file.module').then(m => m.FileModule),
},
{
	path:'greaterThanEqualTo',
	loadChildren: () => import('./greaterThanEqualTo/greater-than-equal-to.module').then(m => m.GreaterThanEqualToModule),
},
{
	path:'greaterThan',
	loadChildren: () => import('./greaterThan/greater-than.module').then(m => m.GreaterThanModule),
},
{
	path:'grid',
	loadChildren: () => import('./grid/grid.module').then(m => m.GridModule),
},
{
	path:'hexColor',
	loadChildren: () => import('./hexColor/hex-color.module').then(m => m.HexColorModule),
},
{
	path:'ip',
	loadChildren: () => import('./ip/ip.module').then(m => m.IpModule),
},
{
	path:'image',
	loadChildren: () => import('./image/image.module').then(m => m.ImageModule),
},
{
	path:'json',
	loadChildren: () => import('./json/json.module').then(m => m.JsonModule),
},
{
	path:'latitude',
	loadChildren: () => import('./latitude/latitude.module').then(m => m.LatitudeModule),
},
{
	path:'latLong',
	loadChildren: () => import('./latLong/lat-long.module').then(m => m.LatLongModule),
},
{
	path:'leapYear',
	loadChildren: () => import('./leapYear/leap-year.module').then(m => m.LeapYearModule),
},
{
	path:'lessThanEqualTo',
	loadChildren: () => import('./lessThanEqualTo/less-than-equal-to.module').then(m => m.LessThanEqualToModule),
},
{
	path:'lessThan',
	loadChildren: () => import('./lessThan/less-than.module').then(m => m.LessThanModule),
},
{
	path:'longitude',
	loadChildren: () => import('./longitude/longitude.module').then(m => m.LongitudeModule),
},
{
	path:'lowerCase',
	loadChildren: () => import('./lowerCase/lower-case.module').then(m => m.LowerCaseModule),
},
{
	path:'mac',
	loadChildren: () => import('./mac/mac.module').then(m => m.MacModule),
},
{
	path:'maxDate',
	loadChildren: () => import('./maxDate/max-date.module').then(m => m.MaxDateModule),
},
{
	path:'maxLength',
	loadChildren: () => import('./maxLength/max-length.module').then(m => m.MaxLengthModule),
},
{
	path:'mask',
	loadChildren: () => import('./mask/mask.module').then(m => m.MaskModule),
},
{
	path:'maxNumber',
	loadChildren: () => import('./maxNumber/max-number.module').then(m => m.MaxNumberModule),
},
{
	path:'minDate',
	loadChildren: () => import('./minDate/min-date.module').then(m => m.MinDateModule),
},
{
	path:'minLength',
	loadChildren: () => import('./minLength/min-length.module').then(m => m.MinLengthModule),
},
{
	path:'minNumber',
	loadChildren: () => import('./minNumber/min-number.module').then(m => m.MinNumberModule),
},
{
	path:'noneOf',
	loadChildren: () => import('./noneOf/none-of.module').then(m => m.NoneOfModule),
},
{
	path:'notEmpty',
	loadChildren: () => import('./notEmpty/not-empty.module').then(m => m.NotEmptyModule),
},
{
	path:'numeric',
	loadChildren: () => import('./numeric/numeric.module').then(m => m.NumericModule),
},
{
	path:'odd',
	loadChildren: () => import('./odd/odd.module').then(m => m.OddModule),
},
{
	path:'oneOf',
	loadChildren: () => import('./oneOf/one-of.module').then(m => m.OneOfModule),
},
{
	path:'password',
	loadChildren: () => import('./password/password.module').then(m => m.PasswordModule),
},
{
	path:'pattern',
	loadChildren: () => import('./pattern/pattern.module').then(m => m.PatternModule),
},
{
	path:'port',
	loadChildren: () => import('./port/port.module').then(m => m.PortModule),
},
{
	path:'primeNumber',
	loadChildren: () => import('./primeNumber/prime-number.module').then(m => m.PrimeNumberModule),
},
{
	path:'range',
	loadChildren: () => import('./range/range.module').then(m => m.RangeModule),
},
{
	path:'rule',
	loadChildren: () => import('./rule/rule.module').then(m => m.RuleModule),
},
{
	path:'required',
	loadChildren: () => import('./required/required.module').then(m => m.RequiredModule),
},
{
	path:'requiredTrue',
	loadChildren: () => import('./requiredTrue/required-true.module').then(m => m.RequiredTrueModule),
},
{
	path:'fileSize',
	loadChildren: () => import('./fileSize/file-size.module').then(m => m.FileSizeModule),
},
{
	path:'startsWith',
	loadChildren: () => import('./startsWith/starts-with.module').then(m => m.StartsWithModule),
},
{
	path:'time',
	loadChildren: () => import('./time/time.module').then(m => m.TimeModule),
},
{
	path:'maxTime',
	loadChildren: () => import('./maxTime/max-time.module').then(m => m.MaxTimeModule),
},
{
	path:'minTime',
	loadChildren: () => import('./minTime/min-time.module').then(m => m.MinTimeModule),
},
{
	path:'unique',
	loadChildren: () => import('./unique/unique.module').then(m => m.UniqueModule),
},
{
	path:'upperCase',
	loadChildren: () => import('./upperCase/upper-case.module').then(m => m.UpperCaseModule),
},
{
	path:'url',
	loadChildren: () => import('./url/url.module').then(m => m.UrlModule),
},
];
export const FORM_VALIDATION_ROUTING = RouterModule.forChild(FORM_VALIDATION_ROUTES);
