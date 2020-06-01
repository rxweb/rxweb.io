import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissingTranslationHandlerComponent } from './comparison/missing-translation-handler/missing-translation-handler.component';
import { TranslateCompilerComponent } from './comparison/translate-compiler/translate-compiler.component';
import { TranslateDirectiveComponent } from './comparison/translate-directive/translate-directive.component';
import { TranslateLoaderComponent } from './comparison/translate-loader/translate-loader.component';
import { TranslateParserComponent } from './comparison/translate-parser/translate-parser.component';
import { TranslatePipeComponent } from './comparison/translate-pipe/translate-pipe.component';
import { TranslateServiceComponent } from './comparison/translate-service/translate-service.component';
import { TranslateStoreComponent } from './comparison/translate-store/translate-store.component';
import { NgxTranslateExtensionGettingStartedComponent } from './getting-started/getting-started.component';
import { PowerhouseAttributeDirectiveComponent } from './powerhouse/attribute-directive/attribute-directive.component';
import { PowerhousePipeComponent } from './powerhouse/pipe/pipe.component';
import { PowerhouseStructuralDirectiveComponent } from './powerhouse/structural-directive/structural-directive.component';
import { PowerhouseDecoratorComponent } from './powerhouse/decorator/decorator.component';
import { PowerhouseValidationMessageComponent } from './powerhouse/validation-message/validation-message.component';
import { ConfidenceComponent } from './confidence/confidence.component';
import { ChangeLanguageComponent } from './playground/change-language/change-language.component';
import { PlayGroundComponent } from './playground/playground.component';

const NGX_TRANSLATE_EXTENSION_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'en/playground' },
  { path: ':languageCode/playground', component: PlayGroundComponent },
  {
    path: 'getting-started',
    component: NgxTranslateExtensionGettingStartedComponent
  },
  {
    path: 'attribute-directive',
    component: PowerhouseAttributeDirectiveComponent
  },
  {
    path: 'pipe',
    component: PowerhousePipeComponent
  },
  {
    path: 'structural-directive',
    component: PowerhouseStructuralDirectiveComponent
  },
  {
    path: 'decorator',
    component: PowerhouseDecoratorComponent
  },
  {
    path: 'validation-message',
    component: PowerhouseValidationMessageComponent
  },
  {
    path: 'comparison',
    loadChildren: 'src/app/components/ngx-translate-extension/comparison/comparison.module#ComparisonModule',
  },
  {
    path: 'confidence',
    component: ConfidenceComponent
  },
  {
    path: 'playground',
    component: PlayGroundComponent
  },
  {
    path: ':languageCode/pre-load-module', loadChildren: './playground/pre-load-module/pre-load-module.component#PreLoadModule'
  }
];
export const NGX_TRANSLATE_EXTENSION_ROUTING: ModuleWithProviders = RouterModule.forChild(NGX_TRANSLATE_EXTENSION_ROUTES);
