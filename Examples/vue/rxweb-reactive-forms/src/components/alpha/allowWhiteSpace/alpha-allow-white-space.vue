
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>State Name</label>
        <input id="name" class="form-control" v-model="addressInfoFormGroup.props.stateName" type="text" name="name" />
          <small class="form-text text-muted">This allowed whitespace in alpha validation<br/></small>
       <div v-if="addressInfoFormGroup.controls.stateName.errors">
         <small class="form-text text-danger">{{addressInfoFormGroup.controls.stateName.errors.alpha.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { AddressInfo } from './addressInfo.model';

@Component
export default class AlphaAllowWhiteSpaceComponent extends Vue {
 addressInfoFormGroup: IFormGroup<AddressInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.addressInfoFormGroup = this.formBuilder.formGroup(AddressInfo) as IFormGroup<AddressInfo>;
   }
}
</script> 
