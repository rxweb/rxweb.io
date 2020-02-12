
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>User Name</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.userName" type="text" name="name" />
        <div v-if="userFormGroup.controls.userName.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.userName.errors.maxDate.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Allocation Date</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.allocationDate" type="text" name="name" />
          <small class="form-text text-muted">you can enter MaxDate upto 30th july 2018<br/></small>
       <div v-if="userFormGroup.controls.allocationDate.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.allocationDate.errors.maxDate.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Birth Date</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.birthDate" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of Max Date on 'Birth date' field, then enter the value 'Bharat' in 'User Name' textbox and you can enter maxDate as 30th july 2018<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.birthDate.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.birthDate.errors.maxDate.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Admission Date</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.admissionDate" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of Max Date on 'Admission Date' field, then enter the value 'Bharat' in 'User Name' textbox and you can enter maxDate as 30th july 2018<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.admissionDate.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.admissionDate.errors.maxDate.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Registration Date</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.registrationDate" type="text" name="name" />
          <small class="form-text text-muted">you can enter MaxDate upto 30th july 2018<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="userFormGroup.controls.registrationDate.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.registrationDate.errors.maxDate.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Enrollment Date</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.enrollmentDate" type="text" name="name" />
          <small class="form-text text-muted">you can enter MaxDate upto 30th july 2018<br/></small>
       <div v-if="userFormGroup.controls.enrollmentDate.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.enrollmentDate.errors.maxDate.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Last Registration Date</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.lastRegistrationDate" type="text" name="name" />
          <small class="form-text text-muted">you can enter MaxDate upto value mentioned in fieldName<br/></small>
       <div v-if="userFormGroup.controls.lastRegistrationDate.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.lastRegistrationDate.errors.maxDate.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Confirmation Date</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.confirmationDate" type="text" name="name" />
          <small class="form-text text-muted">Enterred date must be less than the 30th July 2018<br/></small>
       <div v-if="userFormGroup.controls.confirmationDate.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.confirmationDate.errors.maxDate.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Resignation Date</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.resignationDate" type="text" name="name" />
          <small class="form-text text-muted">Enterred date must be less than the 30th July 2018<br/></small>
         <small class="form-text text-muted">Shows custom message based on message key<br/></small>
       <div v-if="userFormGroup.controls.resignationDate.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.resignationDate.errors.maxDate.message}}<br/></small>	
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
export default class MaxDateCompleteComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
