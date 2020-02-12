
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>System MAC Address</label>
        <input id="name" class="form-control" v-model="macAddressInfoFormGroup.props.systemMacAddress" type="text" name="name" />
          <small class="form-text text-muted">You must enter a MAC address<br/></small>
       <div v-if="macAddressInfoFormGroup.controls.systemMacAddress.errors">
         <small class="form-text text-danger">{{macAddressInfoFormGroup.controls.systemMacAddress.errors.mac.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { MacAddressInfo } from './macAddressInfo.model';

@Component
export default class MacEditComponent extends Vue {
 macAddressInfoFormGroup: IFormGroup<MacAddressInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.macAddressInfoFormGroup = this.formBuilder.formGroup(MacAddressInfo) as IFormGroup<MacAddressInfo>;
   }
}
</script> 
