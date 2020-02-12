
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.age" type="text" name="name" />
        <div v-if="userFormGroup.controls.age.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.age.errors.digit.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Phone Number</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.phoneNumber" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Phone Number' then you need to add 'Age' field greater than or equal to '25'.<br/></small>
         <small class="form-text text-muted">If you want to apply conditional expression of type 'function'<br/></small>
       <div v-if="userFormGroup.controls.phoneNumber.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.phoneNumber.errors.digit.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Fax Number</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.faxNumber" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Fax Number' then you need to add 'Age' field greater than or equal to '25'.<br/></small>
         <small class="form-text text-muted">If you want to apply conditional expression of type 'string'<br/></small>
       <div v-if="userFormGroup.controls.faxNumber.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.faxNumber.errors.digit.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Mobile Number</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.mobileNumber" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message<br/></small>
       <div v-if="userFormGroup.controls.mobileNumber.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.mobileNumber.errors.digit.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>  Zip Code</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.zipCode" type="text" name="name" />
          <small class="form-text text-muted">custom message based on messageKey<br/></small>
       <div v-if="userFormGroup.controls.zipCode.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.zipCode.errors.digit.message}}<br/></small>	
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
export default class DigitDynamicComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
