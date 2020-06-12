import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxFormsModule } from '@rx/forms';
import { DecimalComponent } from './decimal/decimal.component';
import { CurrencyComponent } from './currency/currency.component';
import { FORM_ERROR_MESSAGES_ROUTING } from '../form-error-messages.routing';
import { HttpClientModule } from '@angular/common/http';
import { CommonSharedModule } from '../../shared/common/common-shared.module';
import { TopBarSharedModule } from '../../shared/top-bar/top-bar-shared.module';
import { ANGULAR_PIPES_ROUTING } from './angular-pipes.routing';

@NgModule({
  imports: [ANGULAR_PIPES_ROUTING, HttpClientModule,
    CommonSharedModule, TopBarSharedModule, RxReactiveDynamicFormsModule, RxReactiveFormsModule,
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RxFormsModule],
  declarations: [
    DecimalComponent, CurrencyComponent
  ],
  exports: [RouterModule],
})
export class AngularPipesModule { }
