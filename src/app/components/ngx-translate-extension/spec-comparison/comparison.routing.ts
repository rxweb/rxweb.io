import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissingTranslationHandlerComponent } from './missing-translation-handler/missing-translation-handler.component';
import { TranslateCompilerComponent } from './translate-compiler/translate-compiler.component';
import { TranslateDirectiveComponent } from './translate-directive/translate-directive.component';
import { TranslateLoaderComponent } from './translate-loader/translate-loader.component';
import { TranslateParserComponent } from './translate-parser/translate-parser.component';
import { TranslatePipeComponent } from './translate-pipe/translate-pipe.component';
import { TranslateServiceComponent } from './translate-service/translate-service.component';
import { TranslateStoreComponent } from './translate-store/translate-store.component';

const COMPARISION_ROUTES: Routes = [
  {
    path: 'missing-translation-handler',
    component: MissingTranslationHandlerComponent
  },
  {
    path: 'translate-compiler',
    component: TranslateCompilerComponent
  },
  {
    path: 'translate-directive',
    component: TranslateDirectiveComponent
  },
  {
    path: 'translate-loader',
    component: TranslateLoaderComponent
  },
  {
    path: 'translate-parser',
    component: TranslateParserComponent
  },
  {
    path: 'translate-pipe',
    component: TranslatePipeComponent
  },
  {
    path: 'translate-service',
    component: TranslateServiceComponent
  },
  {
    path: 'translate-store',
    component: TranslateStoreComponent
  }
];
export const COMPARISION_ROUTING = RouterModule.forChild(COMPARISION_ROUTES);