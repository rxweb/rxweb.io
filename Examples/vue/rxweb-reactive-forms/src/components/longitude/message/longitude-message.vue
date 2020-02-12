
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>First Country Longitude</label>
        <input id="name" class="form-control" v-model="countryFormGroup.props.firstCountryLongitude" type="text" name="name" />
          <small class="form-text text-muted">You can enter only longitude<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="countryFormGroup.controls.firstCountryLongitude.errors">
         <small class="form-text text-danger">{{countryFormGroup.controls.firstCountryLongitude.errors.longitude.message}}<br/></small>	
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
export default class LongitudeMessageComponent extends Vue {
 countryFormGroup: IFormGroup<Country>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.countryFormGroup = this.formBuilder.formGroup(Country) as IFormGroup<Country>;
   }
}
</script> 
