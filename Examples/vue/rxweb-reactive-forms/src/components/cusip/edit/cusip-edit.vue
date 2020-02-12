
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Oracle Corporation Cusip Code</label>
        <input id="name" class="form-control" v-model="companyInfoFormGroup.props.oracleCorporationCusipCode" type="text" name="name" />
          <small class="form-text text-muted">You must enter a valid cusip Code only<br/></small>
       <div v-if="companyInfoFormGroup.controls.oracleCorporationCusipCode.errors">
         <small class="form-text text-danger">{{companyInfoFormGroup.controls.oracleCorporationCusipCode.errors.cusip.message}}<br/></small>	
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
export default class CusipEditComponent extends Vue {
 companyInfoFormGroup: IFormGroup<CompanyInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.companyInfoFormGroup = this.formBuilder.formGroup(CompanyInfo) as IFormGroup<CompanyInfo>;
   }
}
</script> 
