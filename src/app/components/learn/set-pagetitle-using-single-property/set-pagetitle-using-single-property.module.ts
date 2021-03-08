import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SET_PAGETITLE_USING_SINGLE_PROPERTY_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/set-pagetitle-using-single-property/set-pagetitle-using-single-property.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { SET_PAGETITLE_USING_SINGLE_PROPERTY_ROUTING } from "src/app/components/learn/set-pagetitle-using-single-property/set-pagetitle-using-single-property.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [SET_PAGETITLE_USING_SINGLE_PROPERTY_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: SET_PAGETITLE_USING_SINGLE_PROPERTY_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Set_pagetitle_using_single_propertyModule { }



