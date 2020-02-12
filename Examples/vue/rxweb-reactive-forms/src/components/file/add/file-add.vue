
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Total Image Files</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.totalImageFiles" type="text" name="name" />
          <small class="form-text text-muted">This field allow upto 5 files.<br/></small>
       <div v-if="userInfoFormGroup.controls.totalImageFiles.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.totalImageFiles.errors.file.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Total Document Files</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.totalDocumentFiles" type="text" name="name" />
          <small class="form-text text-muted">This field allow minmum 5 files.<br/></small>
       <div v-if="userInfoFormGroup.controls.totalDocumentFiles.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.totalDocumentFiles.errors.file.message}}<br/></small>	
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
export default class FileAddComponent extends Vue {
 userInfoFormGroup: IFormGroup<UserInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userInfoFormGroup = this.formBuilder.formGroup(UserInfo) as IFormGroup<UserInfo>;
   }
}
</script> 
