
<template>
  <div class="col-lg-12">
     <form>
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
export default class PrimeNumberMessageKeyComponent extends Vue {
 numberInfoFormGroup: IFormGroup<NumberInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.numberInfoFormGroup = this.formBuilder.formGroup(NumberInfo) as IFormGroup<NumberInfo>;
   }
}
</script> 
