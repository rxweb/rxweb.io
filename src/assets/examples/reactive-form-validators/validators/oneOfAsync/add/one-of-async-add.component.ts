import { Component, OnInit } from '@angular/core';
import { FormGroup} from "@angular/forms"
import { of } from 'rxjs';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
    selector: 'app-oneOf-add-validator',
    templateUrl: './one-of-async-add.component.html'
})
export class OneOfAsyncAddValidatorComponent implements OnInit {
    employeeInfoFormGroup: FormGroup

    projectDomains:string[] = [];
 
    constructor(
        private formBuilder: RxFormBuilder ,private http: HttpClient) { }

        projectDomainsArray: string[] = ["ECommerce", "Banking", "Educational", "Gaming"];
      
        ngOnInit() {
            this.employeeInfoFormGroup = this.formBuilder.group({
                department:[''],
                projectDomains:['',[], RxwebValidators.oneOfAsync({validatorConfig:of({matchValues:["ECommerce", "Banking","Educational","Gaming"]})})], 
            });
        }

        addProjectDomain(element: any, index: number) {
          var indexOf = this.projectDomains.indexOf(element.value);
          element.checked ? this.projectDomains.push(element.value) : this.projectDomains.splice(indexOf, 1);
          this.employeeInfoFormGroup.controls.projectDomains.setValue(this.projectDomains);
        }
}
