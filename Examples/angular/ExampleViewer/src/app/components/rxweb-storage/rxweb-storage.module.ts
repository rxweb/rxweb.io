import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageModule } from "src/app/components/page/page.module";
import { RXWEB_STORAGE_ROUTING } from './rxweb-storage.routing';

@NgModule({
  imports: [RXWEB_STORAGE_ROUTING, PageModule],
  exports: [RouterModule],
})
export class RxwebStorageModule { }
