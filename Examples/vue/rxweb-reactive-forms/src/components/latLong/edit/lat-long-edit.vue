
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>First Country</label>
        <input id="name" class="form-control" v-model="countryFormGroup.props.firstCountry" type="text" name="name" />
          <small class="form-text text-muted">You must enter a proper Latitude or Longitude<br/></small>
       <div v-if="countryFormGroup.controls.firstCountry.errors">
         <small class="form-text text-danger">{{countryFormGroup.controls.firstCountry.errors.latLong.message}}<br/></small>	
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
export default class LatLongEditComponent extends Vue {
 countryFormGroup: IFormGroup<Country>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.countryFormGroup = this.formBuilder.formGroup(Country) as IFormGroup<Country>;
   }
}
</script> 
