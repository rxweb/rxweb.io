
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>File Type</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.fileType" type="text" name="name" />
          <small class="form-text text-muted">Based on selection of file type conditional validation is applied<br/></small>
       <div v-if="userInfoFormGroup.controls.fileType.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.fileType.errors.file.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>MinimumFiles</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.minimumFiles" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'MinimumFiles' then you need to add 'File Type' input as 'Picture'. we can add minimum 5 files<br/></small>
       <div v-if="userInfoFormGroup.controls.minimumFiles.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.minimumFiles.errors.file.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Maximum File</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.maximumFile" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Maximum File' then you need to add 'File Type' input as 'Document'. we can add maximum 5 files<br/></small>
       <div v-if="userInfoFormGroup.controls.maximumFile.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.maximumFile.errors.file.message}}<br/></small>	
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
export default class FileConditionalExpressionComponent extends Vue {
 userInfoFormGroup: IFormGroup<UserInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userInfoFormGroup = this.formBuilder.formGroup(UserInfo) as IFormGroup<UserInfo>;
   }
}
</script> 
