import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageModule } from "src/app/components/page/page.module";
import { BINDING_ROUTING } from './binding.routing';

@NgModule({
  imports: [BINDING_ROUTING, PageModule],
  exports: [RouterModule],
})
export class BindingModule { }
