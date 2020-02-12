
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Device</label>
        <input id="name" class="form-control" v-model="macAddressInfoFormGroup.props.device" type="text" name="name" />
        <div v-if="macAddressInfoFormGroup.controls.device.errors">
         <small class="form-text text-danger">{{macAddressInfoFormGroup.controls.device.errors.mac.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>MAC Address</label>
        <input id="name" class="form-control" v-model="macAddressInfoFormGroup.props.macAddress" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'MAC Address' then you need to add 'Device' input as 'Laptop'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="macAddressInfoFormGroup.controls.macAddress.errors">
         <small class="form-text text-danger">{{macAddressInfoFormGroup.controls.macAddress.errors.mac.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Local MAC Address</label>
        <input id="name" class="form-control" v-model="macAddressInfoFormGroup.props.localMacAddress" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Local MAC Address' then you need to add 'Device' input as 'Laptop'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="macAddressInfoFormGroup.controls.localMacAddress.errors">
         <small class="form-text text-danger">{{macAddressInfoFormGroup.controls.localMacAddress.errors.mac.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>System MAC Address</label>
        <input id="name" class="form-control" v-model="macAddressInfoFormGroup.props.systemMacAddress" type="text" name="name" />
          <small class="form-text text-muted">enter MAC address only<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="macAddressInfoFormGroup.controls.systemMacAddress.errors">
         <small class="form-text text-danger">{{macAddressInfoFormGroup.controls.systemMacAddress.errors.mac.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Server MAC Address</label>
        <input id="name" class="form-control" v-model="macAddressInfoFormGroup.props.serverMacAddress" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message based on message key<br/></small>
       <div v-if="macAddressInfoFormGroup.controls.serverMacAddress.errors">
         <small class="form-text text-danger">{{macAddressInfoFormGroup.controls.serverMacAddress.errors.mac.message}}<br/></small>	
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
export default class MacCompleteComponent extends Vue {
 macAddressInfoFormGroup: IFormGroup<MacAddressInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.macAddressInfoFormGroup = this.formBuilder.formGroup(MacAddressInfo) as IFormGroup<MacAddressInfo>;
   }
}
</script> 
