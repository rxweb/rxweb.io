
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Contact File</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.contactFile" type="text" name="name" />
          <small class="form-text text-muted">Uploaded File must be in the file size range.<br/></small>
         <small class="form-text text-muted">It shows custom message<br/></small>
       <div v-if="userInfoFormGroup.controls.contactFile.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.contactFile.errors.fileSize.message}}<br/></small>	
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
export default class FileSizeMessageComponent extends Vue {
 userInfoFormGroup: IFormGroup<UserInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userInfoFormGroup = this.formBuilder.formGroup(UserInfo) as IFormGroup<UserInfo>;
   }
}
</script> 
