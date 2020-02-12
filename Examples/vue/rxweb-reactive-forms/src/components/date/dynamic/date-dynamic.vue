
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Birth Date</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.birthDate" type="text" name="name" />
          <small class="form-text text-muted">You must enter a proper date format.<br/></small>
       <div v-if="userInfoFormGroup.controls.birthDate.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.birthDate.errors.date.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Admission Date</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.admissionDate" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Admission Date' then you need to add 'birthDate' input as '16/04/1997'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userInfoFormGroup.controls.admissionDate.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.admissionDate.errors.date.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Enrollment Date</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.enrollmentDate" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Enrollment Date' then you need to add 'birthDate' input as '16/04/1997'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userInfoFormGroup.controls.enrollmentDate.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.enrollmentDate.errors.date.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Allocation Date</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.allocationDate" type="text" name="name" />
          <small class="form-text text-muted">enter date format only<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="userInfoFormGroup.controls.allocationDate.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.allocationDate.errors.date.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Confirmation Date</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.confirmationDate" type="text" name="name" />
          <small class="form-text text-muted">Custom message based on messageKey<br/></small>
       <div v-if="userInfoFormGroup.controls.confirmationDate.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.confirmationDate.errors.date.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { UserInfo } from './userInfo.model';

@Component
export default class DateDynamicComponent extends Vue {
 userInfoFormGroup: IFormGroup<UserInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userInfoFormGroup = this.formBuilder.formGroup(UserInfo) as IFormGroup<UserInfo>;
   }
}
</script> 
