import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageModule } from "src/app/components/page/page.module";
import { TRANSLATE_ROUTING } from './translate.routing';

@NgModule({
  imports: [TRANSLATE_ROUTING, PageModule],
  exports: [RouterModule],
})
export class TranslateModule { }
