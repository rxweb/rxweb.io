import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageModule } from "src/app/components/page/page.module";
import { COMPONENT_EXAMPLE } from 'src/app/domain/application.const';
import { SESSION_STORAGE_ROUTING } from './session-storage.routing';
import { SESSION_STORAGE_COMPONENT_EXAMPLE_CONSTANT } from './session-storage.constants';
import { SessionStorageValidatorsExtendedModule } from 'src/assets/examples/storage/session-storage/session-storage-validators-extended.module';

@NgModule({
  imports: [SESSION_STORAGE_ROUTING, SessionStorageValidatorsExtendedModule, PageModule],
  exports: [RouterModule],
  providers: [{ provide: COMPONENT_EXAMPLE, useValue: SESSION_STORAGE_COMPONENT_EXAMPLE_CONSTANT }]
})
export class SessionStorageModule { }
