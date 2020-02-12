
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Enrollment Date</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.enrollmentDate" type="text" name="name" />
          <small class="form-text text-muted">you can enter MinDate upto 30th july 2018<br/></small>
       <div v-if="userFormGroup.controls.enrollmentDate.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.enrollmentDate.errors.minDate.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Last Registration Date</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.lastRegistrationDate" type="text" name="name" />
          <small class="form-text text-muted">you can enter MinDate upto value mentioned in fieldName<br/></small>
       <div v-if="userFormGroup.controls.lastRegistrationDate.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.lastRegistrationDate.errors.minDate.message}}<br/></small>	
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
export default class MinDateFieldNameComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
