
<template>
  <div class="col-lg-12">
     <form>
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
export default class RangeMessageKeyComponent extends Vue {
 employeeInfoFormGroup: IFormGroup<EmployeeInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.employeeInfoFormGroup = this.formBuilder.formGroup(EmployeeInfo) as IFormGroup<EmployeeInfo>;
   }
}
</script> 
