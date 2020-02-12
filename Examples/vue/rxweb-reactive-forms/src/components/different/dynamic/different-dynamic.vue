
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>First Name</label>
        <input id="name" class="form-control" v-model="accountInfoFormGroup.props.firstName" type="text" name="name" />
        <div v-if="accountInfoFormGroup.controls.firstName.errors">
         <small class="form-text text-danger">{{accountInfoFormGroup.controls.firstName.errors.different.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Last Name</label>
        <input id="name" class="form-control" v-model="accountInfoFormGroup.props.lastName" type="text" name="name" />
          <small class="form-text text-muted">Last Name and First Name must be different<br/></small>
       <div v-if="accountInfoFormGroup.controls.lastName.errors">
         <small class="form-text text-danger">{{accountInfoFormGroup.controls.lastName.errors.different.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Middle Name</label>
        <input id="name" class="form-control" v-model="accountInfoFormGroup.props.middleName" type="text" name="name" />
          <small class="form-text text-muted">Middle Name and First Name must be different<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="accountInfoFormGroup.controls.middleName.errors">
         <small class="form-text text-danger">{{accountInfoFormGroup.controls.middleName.errors.different.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Email Address</label>
        <input id="name" class="form-control" v-model="accountInfoFormGroup.props.emailAddress" type="text" name="name" />
        <div v-if="accountInfoFormGroup.controls.emailAddress.errors">
         <small class="form-text text-danger">{{accountInfoFormGroup.controls.emailAddress.errors.different.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Recovery Email Address</label>
        <input id="name" class="form-control" v-model="accountInfoFormGroup.props.recoveryEmailAddress" type="text" name="name" />
          <small class="form-text text-muted">Custom message based on message key<br/></small>
       <div v-if="accountInfoFormGroup.controls.recoveryEmailAddress.errors">
         <small class="form-text text-danger">{{accountInfoFormGroup.controls.recoveryEmailAddress.errors.different.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { AccountInfo } from './accountInfo.model';

@Component
export default class DifferentDynamicComponent extends Vue {
 accountInfoFormGroup: IFormGroup<AccountInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.accountInfoFormGroup = this.formBuilder.formGroup(AccountInfo) as IFormGroup<AccountInfo>;
   }
}
</script> 
