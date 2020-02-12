
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Continent</label>
        <input id="name" class="form-control" v-model="countryFormGroup.props.continent" type="text" name="name" />
        <div v-if="countryFormGroup.controls.continent.errors">
         <small class="form-text text-danger">{{countryFormGroup.controls.continent.errors.latLong.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Second Country</label>
        <input id="name" class="form-control" v-model="countryFormGroup.props.secondCountry" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Second Country' then you need to add 'Continent' input as 'Asia'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="countryFormGroup.controls.secondCountry.errors">
         <small class="form-text text-danger">{{countryFormGroup.controls.secondCountry.errors.latLong.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Third Country</label>
        <input id="name" class="form-control" v-model="countryFormGroup.props.thirdCountry" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Third Country' then you need to add 'Continent' input as 'Asia'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="countryFormGroup.controls.thirdCountry.errors">
         <small class="form-text text-danger">{{countryFormGroup.controls.thirdCountry.errors.latLong.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>First Country</label>
        <input id="name" class="form-control" v-model="countryFormGroup.props.firstCountry" type="text" name="name" />
          <small class="form-text text-muted">enter latitude or longitude only<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="countryFormGroup.controls.firstCountry.errors">
         <small class="form-text text-danger">{{countryFormGroup.controls.firstCountry.errors.latLong.message}}<br/></small>	
       </div>
      </div>  
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
export default class LatLongCompleteComponent extends Vue {
 countryFormGroup: IFormGroup<Country>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.countryFormGroup = this.formBuilder.formGroup(Country) as IFormGroup<Country>;
   }
}
</script> 
