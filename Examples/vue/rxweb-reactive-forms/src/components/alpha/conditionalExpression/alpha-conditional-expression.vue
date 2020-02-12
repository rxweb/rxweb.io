
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Country Name</label>
        <input id="name" class="form-control" v-model="addressInfoFormGroup.props.countryName" type="text" name="name" />
        <div v-if="addressInfoFormGroup.controls.countryName.errors">
         <small class="form-text text-danger">{{addressInfoFormGroup.controls.countryName.errors.alpha.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>City</label>
        <input id="name" class="form-control" v-model="addressInfoFormGroup.props.cityName" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'City' then you need to add 'Country Name' input as 'India'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="addressInfoFormGroup.controls.cityName.errors">
         <small class="form-text text-danger">{{addressInfoFormGroup.controls.cityName.errors.alpha.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Country Code</label>
        <input id="name" class="form-control" v-model="addressInfoFormGroup.props.countryCode" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Country Code' then you need to add 'Country Name' input as 'India'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="addressInfoFormGroup.controls.countryCode.errors">
         <small class="form-text text-danger">{{addressInfoFormGroup.controls.countryCode.errors.alpha.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { AddressInfo } from './addressInfo.model';

@Component
export default class AlphaConditionalExpressionComponent extends Vue {
 addressInfoFormGroup: IFormGroup<AddressInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.addressInfoFormGroup = this.formBuilder.formGroup(AddressInfo) as IFormGroup<AddressInfo>;
   }
}
</script> 
