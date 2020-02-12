
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Amazon Corporation Cusip Code</label>
        <input id="name" class="form-control" v-model="companyInfoFormGroup.props.amazonCorporationCusipCode" type="text" name="name" />
          <small class="form-text text-muted">enter 9-character alphanumeric cusip Code only<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="companyInfoFormGroup.controls.amazonCorporationCusipCode.errors">
         <small class="form-text text-danger">{{companyInfoFormGroup.controls.amazonCorporationCusipCode.errors.cusip.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { CompanyInfo } from './companyInfo.model';

@Component
export default class CusipMessageKeyComponent extends Vue {
 companyInfoFormGroup: IFormGroup<CompanyInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.companyInfoFormGroup = this.formBuilder.formGroup(CompanyInfo) as IFormGroup<CompanyInfo>;
   }
}
</script> 
