
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Amount</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.amount" type="text" name="name" />
        <div v-if="userFormGroup.controls.amount.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.amount.errors.toInt.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Total Amount</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.totalAmount" type="text" name="name" />
        <div v-if="userFormGroup.controls.totalAmount.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.totalAmount.errors.toInt.message}}<br/></small>	
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
export default class ToIntCompleteComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
