
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Number Type</label>
        <input id="name" class="form-control" v-model="numberInfoFormGroup.props.numberType" type="text" name="name" />
        <div v-if="numberInfoFormGroup.controls.numberType.errors">
         <small class="form-text text-danger">{{numberInfoFormGroup.controls.numberType.errors.primeNumber.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Third Number</label>
        <input id="name" class="form-control" v-model="numberInfoFormGroup.props.thirdNumber" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Third Number' then you need to add 'Number Type' input as 'Prime'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="numberInfoFormGroup.controls.thirdNumber.errors">
         <small class="form-text text-danger">{{numberInfoFormGroup.controls.thirdNumber.errors.primeNumber.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Second Number</label>
        <input id="name" class="form-control" v-model="numberInfoFormGroup.props.secondNumber" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Second Number' then you need to add 'Number Type' input as 'Prime'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="numberInfoFormGroup.controls.secondNumber.errors">
         <small class="form-text text-danger">{{numberInfoFormGroup.controls.secondNumber.errors.primeNumber.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { NumberInfo } from './numberInfo.model';

@Component
export default class PrimeNumberConditionalExpressionComponent extends Vue {
 numberInfoFormGroup: IFormGroup<NumberInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.numberInfoFormGroup = this.formBuilder.formGroup(NumberInfo) as IFormGroup<NumberInfo>;
   }
}
</script> 
