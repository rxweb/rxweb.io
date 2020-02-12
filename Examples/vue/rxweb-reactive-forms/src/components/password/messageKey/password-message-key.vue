
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Confirm Password</label>
        <input id="name" class="form-control" v-model="loginInfoFormGroup.props.confirmPassword" type="text" name="name" />
          <small class="form-text text-muted">Shows Custom Validation Message using message key<br/></small>
       <div v-if="loginInfoFormGroup.controls.confirmPassword.errors">
         <small class="form-text text-danger">{{loginInfoFormGroup.controls.confirmPassword.errors.password.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { LoginInfo } from './loginInfo.model';

@Component
export default class PasswordMessageKeyComponent extends Vue {
 loginInfoFormGroup: IFormGroup<LoginInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.loginInfoFormGroup = this.formBuilder.formGroup(LoginInfo) as IFormGroup<LoginInfo>;
   }
}
</script> 
