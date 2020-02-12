
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>State Code</label>
        <input id="name" class="form-control" v-model="addressInfoFormGroup.props.stateCode" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message<br/></small>
       <div v-if="addressInfoFormGroup.controls.stateCode.errors">
         <small class="form-text text-danger">{{addressInfoFormGroup.controls.stateCode.errors.alpha.message}}<br/></small>	
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
export default class AlphaMessageComponent extends Vue {
 addressInfoFormGroup: IFormGroup<AddressInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.addressInfoFormGroup = this.formBuilder.formGroup(AddressInfo) as IFormGroup<AddressInfo>;
   }
}
</script> 
