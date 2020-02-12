
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Company Name</label>
        <input id="name" class="form-control" v-model="companyInfoFormGroup.props.companyName" type="text" name="name" />
        <div v-if="companyInfoFormGroup.controls.companyName.errors">
         <small class="form-text text-danger">{{companyInfoFormGroup.controls.companyName.errors.cusip.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Microsoft Corporation Cusip Code</label>
        <input id="name" class="form-control" v-model="companyInfoFormGroup.props.microsoftCorporationCusipCode" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Microsoft Corporation Cusip Code' then you need to add 'Company Name' input as 'Microsoft'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="companyInfoFormGroup.controls.microsoftCorporationCusipCode.errors">
         <small class="form-text text-danger">{{companyInfoFormGroup.controls.microsoftCorporationCusipCode.errors.cusip.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Google Inc. Cusip Code</label>
        <input id="name" class="form-control" v-model="companyInfoFormGroup.props.googleIncCusipCode" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Google Inc. Cusip Code' then you need to add 'Company Name' input as 'Google'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="companyInfoFormGroup.controls.googleIncCusipCode.errors">
         <small class="form-text text-danger">{{companyInfoFormGroup.controls.googleIncCusipCode.errors.cusip.message}}<br/></small>	
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
export default class CusipConditionalExpressionComponent extends Vue {
 companyInfoFormGroup: IFormGroup<CompanyInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.companyInfoFormGroup = this.formBuilder.formGroup(CompanyInfo) as IFormGroup<CompanyInfo>;
   }
}
</script> 
