
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Aadhar Card</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.aadharCard" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Aadhar Card' then you need to add 'Image Type' input as 'IdentityCard'.<br/></small>
       <div v-if="userInfoFormGroup.controls.aadharCard.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.aadharCard.errors.image.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Pan Card</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.panCard" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Pan Card' then you need to add 'Image Type' input as 'IdentityCard'.<br/></small>
       <div v-if="userInfoFormGroup.controls.panCard.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.panCard.errors.image.message}}<br/></small>	
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
export default class ImageConditionalExpressionComponent extends Vue {
 userInfoFormGroup: IFormGroup<UserInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userInfoFormGroup = this.formBuilder.formGroup(UserInfo) as IFormGroup<UserInfo>;
   }
}
</script> 
