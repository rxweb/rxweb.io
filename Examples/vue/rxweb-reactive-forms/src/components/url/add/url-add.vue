
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Admin Website Url</label>
        <input id="name" class="form-control" v-model="webSiteInfoModelFormGroup.props.adminWebsiteUrl" type="text" name="name" />
        <div v-if="webSiteInfoModelFormGroup.controls.adminWebsiteUrl.errors">
         <small class="form-text text-danger">{{webSiteInfoModelFormGroup.controls.adminWebsiteUrl.errors.url.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { WebSiteInfoModel } from './webSiteInfoModel.model';

@Component
export default class UrlAddComponent extends Vue {
 webSiteInfoModelFormGroup: IFormGroup<WebSiteInfoModel>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.webSiteInfoModelFormGroup = this.formBuilder.formGroup(WebSiteInfoModel) as IFormGroup<WebSiteInfoModel>;
   }
}
</script> 
