
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Admin Website Url</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.adminWebsiteUrl" type="text" name="name" />
        <div v-if="userFormGroup.controls.adminWebsiteUrl.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.adminWebsiteUrl.errors.url.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Customer Website Url</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.customerWebsiteUrl" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Customer Website Url' then you need to add 'admin Website Url' input as 'https://google.co.in'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.customerWebsiteUrl.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.customerWebsiteUrl.errors.url.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>QA Website Url</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.qaWebsiteUrl" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'QA Website Url' then you need to add 'admin Website Url' input as 'https://google.co.in'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.qaWebsiteUrl.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.qaWebsiteUrl.errors.url.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { User } from './user.model';

@Component
export default class UrlConditionalExpressionComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
