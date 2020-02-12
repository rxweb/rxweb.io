
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Card Type</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.cardType" type="text" name="name" />
          <small class="form-text text-muted">Based on selection of card type conditional validation is applied<br/></small>
       <div v-if="userFormGroup.controls.cardType.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.cardType.errors.creditCard.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Credit Card No.</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.creditCardNumber" type="text" name="name" />
          <small class="form-text text-muted">Enter Visa Card No<br/></small>
       <div v-if="userFormGroup.controls.creditCardNumber.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.creditCardNumber.errors.creditCard.message}}<br/></small>	
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
export default class CreditCardEditComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
