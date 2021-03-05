import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { VALIDATING_EMPLOYEE_DYNAMICALLY_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/validating-employee-dynamically/validating-employee-dynamically.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { VALIDATING_EMPLOYEE_DYNAMICALLY_ROUTING } from "src/app/components/learn/validating-employee-dynamically/validating-employee-dynamically.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [VALIDATING_EMPLOYEE_DYNAMICALLY_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: VALIDATING_EMPLOYEE_DYNAMICALLY_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Validating_employee_dynamicallyModule { }



