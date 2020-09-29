import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from "@angular/forms"
import { of } from 'rxjs';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-allOf-add-validator',
  templateUrl: './all-of-async-add.component.html'
})
export class AllOfAsyncAddValidatorComponent implements OnInit {
  
  employeeInfoFormGroup: FormGroup;
  projectDomains: string[] = [];
  projectDomainsArray: string[] = ["ECommerce", "Banking", "Educational", "Gaming"];

  constructor(
    private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.employeeInfoFormGroup = this.formBuilder.group({                                                       
      department: [''],
      projectDomains: ['',[], RxwebValidators.allOfAsync({validatorConfig:of({ matchValues: ["ECommerce", "Banking"] })})],
    });
  }

  addProjectDomain(element: any, index: number) {
    var indexOf = this.projectDomains.indexOf(element.value);
    element.checked ? this.projectDomains.push(element.value) : this.projectDomains.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.projectDomains.setValue(this.projectDomains);
  }
}
