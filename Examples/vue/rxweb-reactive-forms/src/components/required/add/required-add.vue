
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>First Name</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.firstName" type="text" name="name" />
        <div v-if="userInfoFormGroup.controls.firstName.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.firstName.errors.required.message}}<br/></small>	
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
export default class RequiredAddComponent extends Vue {
 userInfoFormGroup: IFormGroup<UserInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userInfoFormGroup = this.formBuilder.formGroup(UserInfo) as IFormGroup<UserInfo>;
   }
}
</script> 
