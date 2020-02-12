
<template>
  <div class="col-lg-12">
     <form>
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
export default class UpperCaseMessageKeyComponent extends Vue {
 locationFormGroup: IFormGroup<Location>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.locationFormGroup = this.formBuilder.formGroup(Location) as IFormGroup<Location>;
   }
}
</script> 
