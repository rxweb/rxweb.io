
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Integer Number</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.integerNumber" type="text" name="name" />
          <small class="form-text text-muted">you can enter only a non decimal positive number<br/></small>
       <div v-if="userInfoFormGroup.controls.integerNumber.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.integerNumber.errors.numeric.message}}<br/></small>	
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
export default class NumericEditComponent extends Vue {
 userInfoFormGroup: IFormGroup<UserInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userInfoFormGroup = this.formBuilder.formGroup(UserInfo) as IFormGroup<UserInfo>;
   }
}
</script> 
