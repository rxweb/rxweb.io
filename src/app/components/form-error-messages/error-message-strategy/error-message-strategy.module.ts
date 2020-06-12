import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxFormsModule } from '@rx/forms';
import { CommonSharedModule } from '../../shared/common/common-shared.module';
import { TopBarSharedModule } from '../../shared/top-bar/top-bar-shared.module';
import { OnSubmitComponent } from './on-submit/on-submit.component';
import { ERROR_MESSAGE_STRATEGY_ROUTING } from './error-message-strategy.routing';
import { OnDirtyComponent } from './on-dirty/on-dirty.component';
import { OnDirtyOrSubmitComponent } from './on-dirty-or-submit/on-dirty-or-submit.component';
import { OnDirtyOrTouchedComponent } from './on-dirty-or-touched/on-dirty-or-touched.component';
import { OnTouchedComponent } from './on-touched/on-touched.component';
import { OnTouchedOrDirtyComponent } from './on-touched-or-dirty/on-touched-or-dirty.component';
import { OnTouchedOrSubmitComponent } from './on-touched-or-submit/on-touched-or-submit.component';

@NgModule({
  imports: [ERROR_MESSAGE_STRATEGY_ROUTING, HttpClientModule,
    CommonSharedModule, TopBarSharedModule, RxReactiveDynamicFormsModule, RxReactiveFormsModule,
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RxFormsModule],
  declarations: [OnSubmitComponent, OnDirtyComponent, OnDirtyOrSubmitComponent, OnDirtyOrTouchedComponent, OnTouchedComponent, OnTouchedOrDirtyComponent, OnTouchedOrSubmitComponent ],
  exports: [RouterModule],
})
export class ErrorMessagesStrategyModule { }
