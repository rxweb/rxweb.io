
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Middle Name</label>
        <input id="name" class="form-control" v-model="accountInfoFormGroup.props.middleName" type="text" name="name" />
          <small class="form-text text-muted">Middle Name and First Name must be different<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="accountInfoFormGroup.controls.middleName.errors">
         <small class="form-text text-danger">{{accountInfoFormGroup.controls.middleName.errors.different.message}}<br/></small>	
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
export default class DifferentMessageComponent extends Vue {
 accountInfoFormGroup: IFormGroup<AccountInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.accountInfoFormGroup = this.formBuilder.formGroup(AccountInfo) as IFormGroup<AccountInfo>;
   }
}
</script> 
