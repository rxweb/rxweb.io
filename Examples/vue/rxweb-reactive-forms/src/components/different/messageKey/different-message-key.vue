
<template>
  <div class="col-lg-12">
     <form>
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
export default class DifferentMessageKeyComponent extends Vue {
 accountInfoFormGroup: IFormGroup<AccountInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.accountInfoFormGroup = this.formBuilder.formGroup(AccountInfo) as IFormGroup<AccountInfo>;
   }
}
</script> 
