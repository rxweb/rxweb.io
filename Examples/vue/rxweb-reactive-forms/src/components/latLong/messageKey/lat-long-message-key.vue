
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Fourth Country</label>
        <input id="name" class="form-control" v-model="countryFormGroup.props.fourthCountry" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message based on message key.<br/></small>
       <div v-if="countryFormGroup.controls.fourthCountry.errors">
         <small class="form-text text-danger">{{countryFormGroup.controls.fourthCountry.errors.latLong.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { Country } from './country.model';

@Component
export default class LatLongMessageKeyComponent extends Vue {
 countryFormGroup: IFormGroup<Country>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.countryFormGroup = this.formBuilder.formGroup(Country) as IFormGroup<Country>;
   }
}
</script> 
