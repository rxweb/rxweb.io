
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Data Type</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.dataType" type="text" name="name" />
        <div v-if="userInfoFormGroup.controls.dataType.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.dataType.errors.numeric.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Negative Number</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.negativeNumber" type="text" name="name" />
          <small class="form-text text-muted">you can enter only a negative number<br/></small>
       <div v-if="userInfoFormGroup.controls.negativeNumber.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.negativeNumber.errors.numeric.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Total Amount</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.totalAmount" type="text" name="name" />
        <div v-if="userInfoFormGroup.controls.totalAmount.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.totalAmount.errors.numeric.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Decimal Number</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.decimalNumber" type="text" name="name" />
          <small class="form-text text-muted">you can enter only a positive decimal number<br/></small>
       <div v-if="userInfoFormGroup.controls.decimalNumber.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.decimalNumber.errors.numeric.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Integer Number</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.integerNumber" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Integer Number' then you need to add 'Data Type' input as 'Integer'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userInfoFormGroup.controls.integerNumber.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.integerNumber.errors.numeric.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Real Number</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.realNumber" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Real Number' then you need to add 'Data Type' input as 'Real'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userInfoFormGroup.controls.realNumber.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.realNumber.errors.numeric.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Positive Number</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.positiveNumber" type="text" name="name" />
          <small class="form-text text-muted">you can enter only a positive number<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="userInfoFormGroup.controls.positiveNumber.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.positiveNumber.errors.numeric.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Positive Non Decimal Number</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.positiveNonDecimalNumber" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message based on message key<br/></small>
       <div v-if="userInfoFormGroup.controls.positiveNonDecimalNumber.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.positiveNonDecimalNumber.errors.numeric.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { UserInfo } from './userInfo.model';

@Component
export default class NumericDynamicComponent extends Vue {
 userInfoFormGroup: IFormGroup<UserInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userInfoFormGroup = this.formBuilder.formGroup(UserInfo) as IFormGroup<UserInfo>;
   }
}
</script> 
