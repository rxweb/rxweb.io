import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PATTERN_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/patternAsync/pattern-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PATTERN_ASYNC_ROUTING } from "src/app/components/async-validators/patternAsync/pattern-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { PatternAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/patternAsync/pattern-async-validators-extended.module';
import { PatternAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/patternAsync/pattern-async-decorators-extended.module';



@NgModule({
  imports: [PATTERN_ASYNC_ROUTING , PatternAsyncValidatorsExtendedModule, PatternAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PATTERN_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PatternAsyncModule { }



