
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Browser</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.browser" type="text" name="name" />
        <div v-if="userFormGroup.controls.browser.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.browser.errors.port.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Entertainment Website Port</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.entertainmentWebsitePort" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Entertainment Website Port' then you need to add 'Browser' input as 'Chrome'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.entertainmentWebsitePort.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.entertainmentWebsitePort.errors.port.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Shopping Website Port</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.shoppingWebsitePort" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Shopping Website Port' then you need to add 'Browser' input as 'Chrome'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.shoppingWebsitePort.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.shoppingWebsitePort.errors.port.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Educational Website Port</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.educationalWebsitePort" type="text" name="name" />
          <small class="form-text text-muted">enter port number only<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="userFormGroup.controls.educationalWebsitePort.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.educationalWebsitePort.errors.port.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Commercial Website Port</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.commercialWebsitePort" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message using messageKey<br/></small>
       <div v-if="userFormGroup.controls.commercialWebsitePort.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.commercialWebsitePort.errors.port.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { User } from './user.model';

@Component
export default class PortDynamicComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
