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
import { AttributeDirectiveComponent } from './powerhouse/attribute-directive/attribute-directive.component';
import { PipeComponent } from './powerhouse/pipe/pipe.component';
import { StructuralDirectiveComponent } from './powerhouse/structural-directive/structural-directive.component';
import { DecoratorComponent } from './powerhouse/decorator/decorator.component';
import { ValidationMessageComponent } from './powerhouse/validation-message/validation-message.component';
import { ConfidenceComponent } from './confidence/confidence.component';

const NGX_TRANSLATE_EXTENSION_ROUTES: Routes = [
  {
    path: '', redirectTo: 'getting-started', pathMatch: 'full'
  },
  {
    path: 'getting-started',
    component: NgxTranslateExtensionGettingStartedComponent
  },
  {
    path: 'attribute-directive',
    component: AttributeDirectiveComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: 'structural-directive',
    component: StructuralDirectiveComponent
  },
  {
    path: 'decorator',
    component: DecoratorComponent
  },
  {
    path: 'validation-message',
    component: ValidationMessageComponent
  },
  {
    path: 'comparison',
    loadChildren: 'src/app/components/ngx-translate-extension/comparison/comparison.module#ComparisonModule',
  },
  {
    path: 'Confidence',
    component: ConfidenceComponent
  }

];
export const NGX_TRANSLATE_EXTENSION_ROUTING: ModuleWithProviders = RouterModule.forChild(NGX_TRANSLATE_EXTENSION_ROUTES);