import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { SanitizerBlacklistComponent } from './blacklist/sanitizer-blacklist.component';
import { SanitizerEscapeComponent } from './escape/sanitizer-escape.component';
import { SanitizerLtrimComponent } from './ltrim/sanitizer-ltrim.component';
import { SanitizerRtrimComponent } from './rtrim/sanitizer-rtrim.component';
import { SanitizerSuffixComponent } from './suffix/sanitizer-suffix.component';
import { SanitizerToBooleanComponent } from './toBoolean/sanitizer-to-boolean.component';
import { SanitizerToFloatComponent } from './toFloat/sanitizer-to-float.component';
import { SanitizerToIntComponent } from './toInt/sanitizer-to-int.component';
import { SanitizerTrimComponent } from './trim/sanitizer-trim.component';
import { SanitizerToStringComponent } from './toString/sanitizer-to-string.component';
import { SanitizerWhitelistComponent } from './whitelist/sanitizer-whitelist.component';
import { SanitizerPrefixComponent } from './prefix/sanitizer-prefix.component';
import { SanitizerToDoubleComponent } from './toDouble/sanitizer-to-double.component';
import { SanitizerUppercaseComponent } from './uppercase/sanitizer-uppercase.component';
import { SanitizerLowercaseComponent } from './lowercase/sanitizer-lowercase.component';



@NgModule({
  declarations: [
    SanitizerBlacklistComponent,SanitizerEscapeComponent,SanitizerLtrimComponent,SanitizerRtrimComponent,SanitizerSuffixComponent,
    SanitizerToBooleanComponent,SanitizerToFloatComponent,SanitizerToIntComponent,SanitizerTrimComponent,SanitizerToStringComponent,
    SanitizerWhitelistComponent,SanitizerPrefixComponent,SanitizerToDoubleComponent,SanitizerUppercaseComponent,SanitizerLowercaseComponent
  ],
entryComponents: [
    SanitizerBlacklistComponent,SanitizerEscapeComponent,SanitizerLtrimComponent,SanitizerRtrimComponent,SanitizerSuffixComponent,
    SanitizerToBooleanComponent,SanitizerToFloatComponent,SanitizerToIntComponent,SanitizerTrimComponent,SanitizerToStringComponent,
    SanitizerWhitelistComponent,SanitizerPrefixComponent,SanitizerToDoubleComponent,SanitizerUppercaseComponent,SanitizerLowercaseComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    SanitizerBlacklistComponent,SanitizerEscapeComponent,SanitizerLtrimComponent,SanitizerRtrimComponent,SanitizerSuffixComponent,
    SanitizerToBooleanComponent,SanitizerToFloatComponent,SanitizerToIntComponent,SanitizerTrimComponent,SanitizerToStringComponent,
    SanitizerWhitelistComponent,SanitizerPrefixComponent,SanitizerToDoubleComponent,SanitizerUppercaseComponent,SanitizerLowercaseComponent
  ],

})
export class  SanitizerValidatorsExtendedModule { }