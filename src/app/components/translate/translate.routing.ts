import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { TranslationStrategyComponent } from './translation-strategy/translation-strategy.component';
import { ContentTranslationComponent } from './content-translation/content-translation.component';
import { ApiComponent } from './api/api.component';
import { ComparisonComponent } from './comparison/comparison.component';

const TRANSLATE_ROUTES: Routes = [
  {
    path: 'binding',
    component: BindingComponent
  },
  {
    path: 'translation-strategy',
    component: TranslationStrategyComponent
  },
  {
    path: 'content-translation',
    component: ContentTranslationComponent
  },
  {
    path: 'api',
    component: ApiComponent
  },
  {
    path: 'comparison',
    component: ComparisonComponent
  }
];
export const TRANSLATE_ROUTING: ModuleWithProviders = RouterModule.forChild(TRANSLATE_ROUTES);
