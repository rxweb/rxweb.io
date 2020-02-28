import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageModule } from "src/app/components/page/page.module";
import { LOCAL_STORAGE_ROUTING } from './local-storage.routing';
import { LocalStorageValidatorsExtendedModule } from 'src/assets/examples/storage/local-storage/local-storage-validators-extended.module';
import { LOCAL_STORAGE_COMPONENT_EXAMPLE_CONSTANT } from './local-storage.constants';
import { COMPONENT_EXAMPLE } from 'src/app/domain/application.const';

@NgModule({
  imports: [LOCAL_STORAGE_ROUTING, LocalStorageValidatorsExtendedModule, PageModule],
  exports: [RouterModule],
  providers: [{ provide: COMPONENT_EXAMPLE, useValue: LOCAL_STORAGE_COMPONENT_EXAMPLE_CONSTANT }]
})
export class LocalStorageModule { }
