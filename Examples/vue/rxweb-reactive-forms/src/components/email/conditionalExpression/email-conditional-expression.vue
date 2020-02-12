
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Email</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.email" type="text" name="name" />
        <div v-if="userFormGroup.controls.email.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.email.errors.email.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Business Email Address</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.businessEmailAddress" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Business Email Address' then you need to add 'email' field input to 'abc@gmail.com'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.businessEmailAddress.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.businessEmailAddress.errors.email.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Recovery Email Address</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.recoveryEmailAddress" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Recovery Email Address' then you need to add 'email' field input to 'abc@gmail.com'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.recoveryEmailAddress.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.recoveryEmailAddress.errors.email.message}}<br/></small>	
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
export default class EmailConditionalExpressionComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
