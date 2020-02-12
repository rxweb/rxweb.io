
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Fourth Country Longitude</label>
        <input id="name" class="form-control" v-model="countryFormGroup.props.fourthCountryLongitude" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message based on message key<br/></small>
       <div v-if="countryFormGroup.controls.fourthCountryLongitude.errors">
         <small class="form-text text-danger">{{countryFormGroup.controls.fourthCountryLongitude.errors.longitude.message}}<br/></small>	
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
export default class LongitudeMessageKeyComponent extends Vue {
 countryFormGroup: IFormGroup<Country>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.countryFormGroup = this.formBuilder.formGroup(Country) as IFormGroup<Country>;
   }
}
</script> 
