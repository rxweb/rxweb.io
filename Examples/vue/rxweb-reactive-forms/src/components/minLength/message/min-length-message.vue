
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Land line No</label>
        <input id="name" class="form-control" v-model="contactFormGroup.props.landLineNo" type="text" name="name" />
          <small class="form-text text-muted">Minimum length upto 8 characters.<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="contactFormGroup.controls.landLineNo.errors">
         <small class="form-text text-danger">{{contactFormGroup.controls.landLineNo.errors.minLength.message}}<br/></small>	
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
export default class MinLengthMessageComponent extends Vue {
 contactFormGroup: IFormGroup<Contact>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.contactFormGroup = this.formBuilder.formGroup(Contact) as IFormGroup<Contact>;
   }
}
</script> 
