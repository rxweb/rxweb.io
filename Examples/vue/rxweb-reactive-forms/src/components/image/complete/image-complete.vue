
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Image Type</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.imageType" type="text" name="name" />
          <small class="form-text text-muted">Based on selection of file type conditional validation is applied<br/></small>
       <div v-if="userInfoFormGroup.controls.imageType.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.imageType.errors.image.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Profile Photo</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.profilePhoto" type="text" name="name" />
        <div v-if="userInfoFormGroup.controls.profilePhoto.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.profilePhoto.errors.image.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Signature</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.signature" type="text" name="name" />
        <div v-if="userInfoFormGroup.controls.signature.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.signature.errors.image.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Voter Id</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.voterId" type="text" name="name" />
        <div v-if="userInfoFormGroup.controls.voterId.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.voterId.errors.image.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Identity Card</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.identityCard" type="text" name="name" />
        <div v-if="userInfoFormGroup.controls.identityCard.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.identityCard.errors.image.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Driving License</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.drivinglicense" type="text" name="name" />
        <div v-if="userInfoFormGroup.controls.drivinglicense.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.drivinglicense.errors.image.message}}<br/></small>	
       </div>
      </div>  
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
    <div class="form-group">
        <label>Residence Proof</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.residenceProof" type="text" name="name" />
          <small class="form-text text-muted">Invalid Image height or width.<br/></small>
         <small class="form-text text-muted">It shows custom message<br/></small>
       <div v-if="userInfoFormGroup.controls.residenceProof.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.residenceProof.errors.image.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Passport</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.passport" type="text" name="name" />
        <div v-if="userInfoFormGroup.controls.passport.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.passport.errors.image.message}}<br/></small>	
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
export default class ImageCompleteComponent extends Vue {
 userInfoFormGroup: IFormGroup<UserInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userInfoFormGroup = this.formBuilder.formGroup(UserInfo) as IFormGroup<UserInfo>;
   }
}
</script> 
