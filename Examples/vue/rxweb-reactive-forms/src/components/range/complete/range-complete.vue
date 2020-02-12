
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Employee Age</label>
        <input id="name" class="form-control" v-model="employeeInfoFormGroup.props.age" type="text" name="name" />
          <small class="form-text text-muted">Age Should be between 18 to 60.<br/></small>
       <div v-if="employeeInfoFormGroup.controls.age.errors">
         <small class="form-text text-danger">{{employeeInfoFormGroup.controls.age.errors.range.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Project Duration</label>
        <input id="name" class="form-control" v-model="employeeInfoFormGroup.props.projectDuration" type="text" name="name" />
          <small class="form-text text-muted">If Your age is above 25 your Project Duration should be between 6 to 8 months.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="employeeInfoFormGroup.controls.projectDuration.errors">
         <small class="form-text text-danger">{{employeeInfoFormGroup.controls.projectDuration.errors.range.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Employee Experience</label>
        <input id="name" class="form-control" v-model="employeeInfoFormGroup.props.experience" type="text" name="name" />
          <small class="form-text text-muted">If Your age is above 25 your minimum experience should be between 2 to 20.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="employeeInfoFormGroup.controls.experience.errors">
         <small class="form-text text-danger">{{employeeInfoFormGroup.controls.experience.errors.range.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Salary</label>
        <input id="name" class="form-control" v-model="employeeInfoFormGroup.props.salary" type="text" name="name" />
          <small class="form-text text-muted">Shows Custom Validation Message<br/></small>
         <small class="form-text text-muted">Please enter salary between 1000 to 200000<br/></small>
       <div v-if="employeeInfoFormGroup.controls.salary.errors">
         <small class="form-text text-danger">{{employeeInfoFormGroup.controls.salary.errors.range.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Number of Projects</label>
        <input id="name" class="form-control" v-model="employeeInfoFormGroup.props.noOfprojects" type="text" name="name" />
          <small class="form-text text-muted">Shows Custom Validation Message using message key<br/></small>
       <div v-if="employeeInfoFormGroup.controls.noOfprojects.errors">
         <small class="form-text text-danger">{{employeeInfoFormGroup.controls.noOfprojects.errors.range.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { EmployeeInfo } from './employeeInfo.model';

@Component
export default class RangeCompleteComponent extends Vue {
 employeeInfoFormGroup: IFormGroup<EmployeeInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.employeeInfoFormGroup = this.formBuilder.formGroup(EmployeeInfo) as IFormGroup<EmployeeInfo>;
   }
}
</script> 
