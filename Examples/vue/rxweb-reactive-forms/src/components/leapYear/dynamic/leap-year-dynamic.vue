
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Name</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.name" type="text" name="name" />
        <div v-if="userFormGroup.controls.name.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.name.errors.leapYear.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Birth Year</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.birthYear" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of leapYear on 'Birth Year' field, then enter 'Bharat' in 'Name' textbox<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.birthYear.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.birthYear.errors.leapYear.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Admission Year</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.admissionYear" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of leapYear on 'Admission Year' field, then enter 'Bharat' in 'Name' textbox<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.admissionYear.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.admissionYear.errors.leapYear.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Joining Year</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.joiningYear" type="text" name="name" />
          <small class="form-text text-muted">you can enter only a leap year<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="userFormGroup.controls.joiningYear.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.joiningYear.errors.leapYear.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Promotion Year</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.promotionYear" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message based on message key.<br/></small>
       <div v-if="userFormGroup.controls.promotionYear.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.promotionYear.errors.leapYear.message}}<br/></small>	
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
export default class LeapYearDynamicComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
