import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { IMAGE_ASYNC_ROUTING } from "src/app/components/async-validators/imageAsync/image-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { ImageAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/imageAsync/image-async-validators-extended.module';
import { ImageAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/imageAsync/image-async-decorators-extended.module';
import { IMAGE_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from './image-async.constants';



@NgModule({
  imports: [IMAGE_ASYNC_ROUTING , ImageAsyncValidatorsExtendedModule,ImageAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue:IMAGE_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ImageAsyncModule { }



