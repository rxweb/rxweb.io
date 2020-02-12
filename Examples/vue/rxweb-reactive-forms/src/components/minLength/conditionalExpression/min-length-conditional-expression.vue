
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Country Name</label>
        <input id="name" class="form-control" v-model="contactFormGroup.props.countryName" type="text" name="name" />
        <div v-if="contactFormGroup.controls.countryName.errors">
         <small class="form-text text-danger">{{contactFormGroup.controls.countryName.errors.minLength.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>State Code</label>
        <input id="name" class="form-control" v-model="contactFormGroup.props.stateCode" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditionalExpression on 'State Code', then enter 'India' in 'Country Name'<br/></small>
         <small class="form-text text-muted">Minimum length upto 3 characters.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="contactFormGroup.controls.stateCode.errors">
         <small class="form-text text-danger">{{contactFormGroup.controls.stateCode.errors.minLength.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Country Code</label>
        <input id="name" class="form-control" v-model="contactFormGroup.props.countryCode" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditionalExpression on 'Country Code', then enter 'India' in 'Country Name'<br/></small>
         <small class="form-text text-muted">Minimum length upto 3 characters.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="contactFormGroup.controls.countryCode.errors">
         <small class="form-text text-danger">{{contactFormGroup.controls.countryCode.errors.minLength.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { Contact } from './contact.model';

@Component
export default class MinLengthConditionalExpressionComponent extends Vue {
 contactFormGroup: IFormGroup<Contact>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.contactFormGroup = this.formBuilder.formGroup(Contact) as IFormGroup<Contact>;
   }
}
</script> 
