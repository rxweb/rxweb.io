
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Email</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.email" type="text" name="name" />
        <div v-if="userFormGroup.controls.email.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.email.errors.compare.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Confirm Email</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.confirmEmail" type="text" name="name" />
        <div v-if="userFormGroup.controls.confirmEmail.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.confirmEmail.errors.compare.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Password</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.password" type="text" name="name" />
        <div v-if="userFormGroup.controls.password.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.password.errors.compare.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Confirm Password</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.confirmPassword" type="text" name="name" />
        <div v-if="userFormGroup.controls.confirmPassword.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.confirmPassword.errors.compare.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Contact Number</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.contactNumber" type="text" name="name" />
        <div v-if="userFormGroup.controls.contactNumber.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.contactNumber.errors.compare.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Confirm Contact Number</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.confirmContactNumber" type="text" name="name" />
          <small class="form-text text-muted">custom message based on messageKey<br/></small>
       <div v-if="userFormGroup.controls.confirmContactNumber.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.confirmContactNumber.errors.compare.message}}<br/></small>	
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
export default class CompareCompleteComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
