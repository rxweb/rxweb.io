
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Admission Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.admissionAge" type="text" name="name" />
        <div v-if="userFormGroup.controls.admissionAge.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.admissionAge.errors.greaterThanEqualTo.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Retirement Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.retiermentAge" type="text" name="name" />
          <small class="form-text text-muted">Retirement Age should be greater than equal to Admission Age<br/></small>
       <div v-if="userFormGroup.controls.retiermentAge.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.retiermentAge.errors.greaterThanEqualTo.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { User } from './user.model';

@Component
export default class GreaterThanEqualToFieldNameComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
