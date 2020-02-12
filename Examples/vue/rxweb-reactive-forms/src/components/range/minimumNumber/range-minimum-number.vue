
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
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { EmployeeInfo } from './employeeInfo.model';

@Component
export default class RangeMinimumNumberComponent extends Vue {
 employeeInfoFormGroup: IFormGroup<EmployeeInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.employeeInfoFormGroup = this.formBuilder.formGroup(EmployeeInfo) as IFormGroup<EmployeeInfo>;
   }
}
</script> 
