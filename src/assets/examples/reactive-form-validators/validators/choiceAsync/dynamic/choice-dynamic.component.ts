import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { FormBuilderConfiguration,RxFormBuilder} from '@rxweb/reactive-form-validators';
import { environment } from 'src/environments/environment';
@Component({
    selector: 'app-choice-dynamic-validator',
    templateUrl: './choice-dynamic.component.html'
})
export class ChoiceDynamicValidatorComponent implements OnInit {

    employeeInfoFormGroup: FormGroup
    skills: string[] = [];
    hobbies: string[] = [];
    projectDomains : string[] = [];
    languages:string[] = [];
  certifications: string[] = [];
    constructor(
        private formBuilder: RxFormBuilder, private http: HttpClient) { }

    languagesArray: string[] = ["English","Chinese","Japanese","Spanish","French"];
    skillsArray: string[] = ["MVC","AngularJS","Angular 5","C#","Web Api","SQL Server"];
    hobbiesArray: string[] = ["Drawing","Singing","Dancing","Travelling","Sports"];
    projectDomainsArray : string[] = ["ECommerce", "Banking", "Educational", "Gaming"];
  certificationsArray: string[] = ["Microsoft certified", "Google certified", "Oracle certified", "AWS certified", "Adobe certified", "VMware certified"];
    ngOnInit() {
		let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('assets/examples/reactive-form-validators/validators/choice/dynamic/dynamic.json?v='+environment.appVersion).subscribe(dynamic => {
			formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
          var employeeInfo = { department: '', projectDomains: '', skills: '', hobbies: '', languages: '', certifications: '' }
			this.employeeInfoFormGroup = this.formBuilder.group(employeeInfo,formBuilderConfiguration);
		})
    }

    addProjectDomain(element: any,index:number) {
      var indexOf = this.projectDomains.indexOf(element.value);
      element.checked ? this.projectDomains.push(element.value) : this.projectDomains.splice(indexOf,1);
       this.employeeInfoFormGroup.controls.projectDomains.setValue(this.projectDomains);
    }
    
    addSkill(element: any,index:number) {
      var indexOf = this.skills.indexOf(element.value);
      element.checked ? this.skills.push(element.value) : this.skills.splice(indexOf,1);
       this.employeeInfoFormGroup.controls.skills.setValue(this.skills);
    }

      addHobby(element: any,index:number) {
        var indexOf = this.hobbies.indexOf(element.value);
        element.checked ? this.hobbies.push(element.value) : this.hobbies.splice(indexOf,1);
         this.employeeInfoFormGroup.controls.hobbies.setValue(this.hobbies);
      }

  addLanguage(element: any, index: number) {
      var indexOf = this.languages.indexOf(element.value);
        element.checked ? this.languages.push(element.value) : this.languages.splice(indexOf,1);
         this.employeeInfoFormGroup.controls.languages.setValue(this.languages);
  }

  addCertification(element: any) {
    var indexOf = this.certifications.indexOf(element.value);
    element.checked ? this.certifications.push(element.value) : this.certifications.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.certifications.setValue(this.certifications);
  }
}
