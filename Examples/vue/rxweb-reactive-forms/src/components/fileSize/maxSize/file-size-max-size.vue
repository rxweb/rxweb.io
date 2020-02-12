
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Video File</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.videoFile" type="text" name="name" />
        <div v-if="userInfoFormGroup.controls.videoFile.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.videoFile.errors.fileSize.message}}<br/></small>	
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
export default class FileSizeMaxSizeComponent extends Vue {
 userInfoFormGroup: IFormGroup<UserInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userInfoFormGroup = this.formBuilder.formGroup(UserInfo) as IFormGroup<UserInfo>;
   }
}
</script> 
