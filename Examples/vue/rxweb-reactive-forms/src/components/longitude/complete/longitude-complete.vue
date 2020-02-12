
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label> Continent</label>
        <input id="name" class="form-control" v-model="countryFormGroup.props.continent" type="text" name="name" />
        <div v-if="countryFormGroup.controls.continent.errors">
         <small class="form-text text-danger">{{countryFormGroup.controls.continent.errors.longitude.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Second Country Longitude</label>
        <input id="name" class="form-control" v-model="countryFormGroup.props.secondCountryLongitude" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Second Country Longitude' then you need to add 'Continent' input as 'Asia'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="countryFormGroup.controls.secondCountryLongitude.errors">
         <small class="form-text text-danger">{{countryFormGroup.controls.secondCountryLongitude.errors.longitude.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Third Country Longitude</label>
        <input id="name" class="form-control" v-model="countryFormGroup.props.thirdCountryLongitude" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Third Country Longitude' then you need to add 'Continent' input as 'Asia'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="countryFormGroup.controls.thirdCountryLongitude.errors">
         <small class="form-text text-danger">{{countryFormGroup.controls.thirdCountryLongitude.errors.longitude.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>First Country Longitude</label>
        <input id="name" class="form-control" v-model="countryFormGroup.props.firstCountryLongitude" type="text" name="name" />
          <small class="form-text text-muted">You can enter only longitude<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="countryFormGroup.controls.firstCountryLongitude.errors">
         <small class="form-text text-danger">{{countryFormGroup.controls.firstCountryLongitude.errors.longitude.message}}<br/></small>	
       </div>
      </div>  
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
export default class LongitudeCompleteComponent extends Vue {
 countryFormGroup: IFormGroup<Country>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.countryFormGroup = this.formBuilder.formGroup(Country) as IFormGroup<Country>;
   }
}
</script> 
