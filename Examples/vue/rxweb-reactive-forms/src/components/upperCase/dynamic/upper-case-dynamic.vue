
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Country Name</label>
        <input id="name" class="form-control" v-model="locationFormGroup.props.countryName" type="text" name="name" />
        <div v-if="locationFormGroup.controls.countryName.errors">
         <small class="form-text text-danger">{{locationFormGroup.controls.countryName.errors.upperCase.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>State Name</label>
        <input id="name" class="form-control" v-model="locationFormGroup.props.stateName" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of upperCase on 'State Name' field, then enter the value of 'INDIA' in 'Country Name' textbox.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="locationFormGroup.controls.stateName.errors">
         <small class="form-text text-danger">{{locationFormGroup.controls.stateName.errors.upperCase.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>City Name</label>
        <input id="name" class="form-control" v-model="locationFormGroup.props.cityName" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of upperCase on 'City Name' field, then enter the value of 'INDIA' in 'Country Name' textbox.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="locationFormGroup.controls.cityName.errors">
         <small class="form-text text-danger">{{locationFormGroup.controls.cityName.errors.upperCase.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Colony Name</label>
        <input id="name" class="form-control" v-model="locationFormGroup.props.colonyName" type="text" name="name" />
        <div v-if="locationFormGroup.controls.colonyName.errors">
         <small class="form-text text-danger">{{locationFormGroup.controls.colonyName.errors.upperCase.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Street Name</label>
        <input id="name" class="form-control" v-model="locationFormGroup.props.streetName" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message based on message key<br/></small>
       <div v-if="locationFormGroup.controls.streetName.errors">
         <small class="form-text text-danger">{{locationFormGroup.controls.streetName.errors.upperCase.message}}<br/></small>	
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
export default class UpperCaseDynamicComponent extends Vue {
 locationFormGroup: IFormGroup<Location>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.locationFormGroup = this.formBuilder.formGroup(Location) as IFormGroup<Location>;
   }
}
</script> 
