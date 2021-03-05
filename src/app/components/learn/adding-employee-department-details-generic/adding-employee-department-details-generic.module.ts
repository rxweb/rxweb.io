import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ADDING_EMPLOYEE_DEPARTMENT_DETAILS_GENERIC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/adding-employee-department-details-generic/adding-employee-department-details-generic.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ADDING_EMPLOYEE_DEPARTMENT_DETAILS_GENERIC_ROUTING } from "src/app/components/learn/adding-employee-department-details-generic/adding-employee-department-details-generic.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ADDING_EMPLOYEE_DEPARTMENT_DETAILS_GENERIC_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ADDING_EMPLOYEE_DEPARTMENT_DETAILS_GENERIC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Adding_employee_department_details_genericModule { }



