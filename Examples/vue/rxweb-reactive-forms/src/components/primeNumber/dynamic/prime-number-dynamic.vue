
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
        <label>Second Number</label>
        <input id="name" class="form-control" v-model="numberInfoFormGroup.props.secondNumber" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Second Number' then you need to add 'Number Type' input as 'Prime'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="numberInfoFormGroup.controls.secondNumber.errors">
         <small class="form-text text-danger">{{numberInfoFormGroup.controls.secondNumber.errors.primeNumber.message}}<br/></small>	
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
        <label>First Number</label>
        <input id="name" class="form-control" v-model="numberInfoFormGroup.props.firstNumber" type="text" name="name" />
          <small class="form-text text-muted">You can enter only prime number<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="numberInfoFormGroup.controls.firstNumber.errors">
         <small class="form-text text-danger">{{numberInfoFormGroup.controls.firstNumber.errors.primeNumber.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Fourth Number</label>
        <input id="name" class="form-control" v-model="numberInfoFormGroup.props.fourthNumber" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message using messageKey<br/></small>
       <div v-if="numberInfoFormGroup.controls.fourthNumber.errors">
         <small class="form-text text-danger">{{numberInfoFormGroup.controls.fourthNumber.errors.primeNumber.message}}<br/></small>	
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
export default class PrimeNumberDynamicComponent extends Vue {
 numberInfoFormGroup: IFormGroup<NumberInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.numberInfoFormGroup = this.formBuilder.formGroup(NumberInfo) as IFormGroup<NumberInfo>;
   }
}
</script> 
