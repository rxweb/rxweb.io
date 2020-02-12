
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>First Country Longitude</label>
        <input id="name" class="form-control" v-model="numberInfoFormGroup.props.firstCountryLongitude" type="text" name="name" />
          <small class="form-text text-muted">You must enter a valid longitude<br/></small>
       <div v-if="numberInfoFormGroup.controls.firstCountryLongitude.errors">
         <small class="form-text text-danger">{{numberInfoFormGroup.controls.firstCountryLongitude.errors.longitude.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { NumberInfo } from './numberInfo.model';

@Component
export default class LongitudeEditComponent extends Vue {
 numberInfoFormGroup: IFormGroup<NumberInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.numberInfoFormGroup = this.formBuilder.formGroup(NumberInfo) as IFormGroup<NumberInfo>;
   }
}
</script> 
