import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormBuilder } from "@angular/forms"
import { RxFormBuilder,RxFormGroup,RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
    selector: 'app-errormessagestrategy-onsubmit-validator',
    templateUrl: './errormessagestrategy-onsubmit.component.html'
})
export class ErrormessagestrategyOnsubmitValidatorComponent implements OnInit {
    userFormGroup: RxFormGroup

    constructor(
        private formBuilder: RxFormBuilder , private fb : FormBuilder  ) { }

    ngOnInit() {
        this.userFormGroup = <RxFormGroup>this.formBuilder.group({
          userName:['',RxwebValidators.required()],
          password:['',RxwebValidators.required()],
        address:this.formBuilder.group({
            city: ['',RxwebValidators.required()]
        }),
        skills:this.fb.array([
              this.getSkillFormGroup()
            ])
        });       
      
    }
    
      OnSubmit()
       {
        this.userFormGroup.submitted = true;
       }
   
        addSkill(){
        let skillsArray = <FormArray>this.userFormGroup.controls.skills;
        skillsArray.push(this.getSkillFormGroup());
      }
  
      getSkillFormGroup(){
        return this.formBuilder.group({
          skillName:['',RxwebValidators.required()]
        })
      }
 
}
