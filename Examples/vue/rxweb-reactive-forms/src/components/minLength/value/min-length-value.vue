
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Mobile No.</label>
        <input id="name" class="form-control" v-model="contactFormGroup.props.mobileNo" type="text" name="name" />
          <small class="form-text text-muted">Minimum length upto 10 characters.<br/></small>
         <small class="form-text text-muted">Shows message from ReactiveFormConfig.<br/></small>
       <div v-if="contactFormGroup.controls.mobileNo.errors">
         <small class="form-text text-danger">{{contactFormGroup.controls.mobileNo.errors.minLength.message}}<br/></small>	
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
export default class MinLengthValueComponent extends Vue {
 contactFormGroup: IFormGroup<Contact>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.contactFormGroup = this.formBuilder.formGroup(Contact) as IFormGroup<Contact>;
   }
}
</script> 
