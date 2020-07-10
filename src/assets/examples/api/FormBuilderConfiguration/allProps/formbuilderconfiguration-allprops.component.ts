import { Component, OnInit } from '@angular/core';
import { RxFormBuilder, FormBuilderConfiguration, RxFormGroup, RxwebValidators } from '@rxweb/reactive-form-validators';
import { ValidatorFn, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formbuilderconfiguration-allprops',
  templateUrl: './formbuilderconfiguration-allprops.component.html'
})
export class FormbuilderconfigurationAllPropsComponent implements OnInit {
  userInfoFormGroup: RxFormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    var formBuilderConfig = new FormBuilderConfiguration();
    formBuilderConfig.applyAllProps = [RxwebValidators.required()]
    this.userInfoFormGroup = <RxFormGroup>this.formBuilder.group({
      firstName: [''],
      lastName: ['']
    }, formBuilderConfig)
  }

}
