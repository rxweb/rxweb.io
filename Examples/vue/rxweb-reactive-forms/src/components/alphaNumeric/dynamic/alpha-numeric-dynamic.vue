
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Area Name</label>
        <input id="name" class="form-control" v-model="locationFormGroup.props.areaName" type="text" name="name" />
        <div v-if="locationFormGroup.controls.areaName.errors">
         <small class="form-text text-danger">{{locationFormGroup.controls.areaName.errors.alphaNumeric.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Flat Address</label>
        <input id="name" class="form-control" v-model="locationFormGroup.props.flatAddress" type="text" name="name" />
          <small class="form-text text-muted">This allowed whitespace in alpha Numeric validation<br/></small>
       <div v-if="locationFormGroup.controls.flatAddress.errors">
         <small class="form-text text-danger">{{locationFormGroup.controls.flatAddress.errors.alphaNumeric.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Postal Address</label>
        <input id="name" class="form-control" v-model="locationFormGroup.props.postalAddress" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message<br/></small>
       <div v-if="locationFormGroup.controls.postalAddress.errors">
         <small class="form-text text-danger">{{locationFormGroup.controls.postalAddress.errors.alphaNumeric.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Country Code</label>
        <input id="name" class="form-control" v-model="locationFormGroup.props.countryCode" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on this field then you need to add 'areaName' input as 'Delhi'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="locationFormGroup.controls.countryCode.errors">
         <small class="form-text text-danger">{{locationFormGroup.controls.countryCode.errors.alphaNumeric.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>City Code</label>
        <input id="name" class="form-control" v-model="locationFormGroup.props.cityCode" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on this field then you need to add 'areaName' input as 'Delhi'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="locationFormGroup.controls.cityCode.errors">
         <small class="form-text text-danger">{{locationFormGroup.controls.cityCode.errors.alphaNumeric.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Colony Name</label>
        <input id="name" class="form-control" v-model="locationFormGroup.props.colonyName" type="text" name="name" />
          <small class="form-text text-muted">custom message based on messageKey<br/></small>
       <div v-if="locationFormGroup.controls.colonyName.errors">
         <small class="form-text text-danger">{{locationFormGroup.controls.colonyName.errors.alphaNumeric.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { Location } from './location.model';

@Component
export default class AlphaNumericDynamicComponent extends Vue {
 locationFormGroup: IFormGroup<Location>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.locationFormGroup = this.formBuilder.formGroup(Location) as IFormGroup<Location>;
   }
}
</script> 
