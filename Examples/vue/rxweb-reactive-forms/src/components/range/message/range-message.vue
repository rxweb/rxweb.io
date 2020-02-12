
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Salary</label>
        <input id="name" class="form-control" v-model="employeeInfoFormGroup.props.salary" type="text" name="name" />
          <small class="form-text text-muted">Shows Custom Validation Message<br/></small>
         <small class="form-text text-muted">Please enter salary between 1000 to 200000<br/></small>
       <div v-if="employeeInfoFormGroup.controls.salary.errors">
         <small class="form-text text-danger">{{employeeInfoFormGroup.controls.salary.errors.range.message}}<br/></small>	
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
export default class RangeMessageComponent extends Vue {
 employeeInfoFormGroup: IFormGroup<EmployeeInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.employeeInfoFormGroup = this.formBuilder.formGroup(EmployeeInfo) as IFormGroup<EmployeeInfo>;
   }
}
</script> 
