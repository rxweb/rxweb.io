import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageModule } from "src/app/components/page/page.module";
import { STORAGE_ROUTING } from './storage.routing';

@NgModule({
  imports: [STORAGE_ROUTING, PageModule],
  exports: [RouterModule],
})
export class StorageModule { }
