
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
          <small class="form-text text-muted">Both field must be different<br/></small>
       <div v-if="accountInfoFormGroup.controls.lastName.errors">
         <small class="form-text text-danger">{{accountInfoFormGroup.controls.lastName.errors.different.message}}<br/></small>	
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
export default class DifferentAddComponent extends Vue {
 accountInfoFormGroup: IFormGroup<AccountInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.accountInfoFormGroup = this.formBuilder.formGroup(AccountInfo) as IFormGroup<AccountInfo>;
   }
}
</script> 
