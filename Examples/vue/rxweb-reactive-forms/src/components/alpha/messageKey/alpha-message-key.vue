
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>City Code</label>
        <input id="name" class="form-control" v-model="addressInfoFormGroup.props.cityCode" type="text" name="name" />
          <small class="form-text text-muted">custom message based on messageKey<br/></small>
       <div v-if="addressInfoFormGroup.controls.cityCode.errors">
         <small class="form-text text-danger">{{addressInfoFormGroup.controls.cityCode.errors.alpha.message}}<br/></small>	
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
export default class AlphaMessageKeyComponent extends Vue {
 addressInfoFormGroup: IFormGroup<AddressInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.addressInfoFormGroup = this.formBuilder.formGroup(AddressInfo) as IFormGroup<AddressInfo>;
   }
}
</script> 
