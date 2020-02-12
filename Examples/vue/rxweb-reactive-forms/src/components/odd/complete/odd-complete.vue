
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Type</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.type" type="text" name="name" />
        <div v-if="userFormGroup.controls.type.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.type.errors.odd.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Number</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.number" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Number' then you need to add 'Type' input as 'Odd'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.number.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.number.errors.odd.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Odd Number</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.oddNumber" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Odd Number' then you need to add 'Type' input as 'Odd'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.oddNumber.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.oddNumber.errors.odd.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Multiples of Odd Number</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.multiplesOfOddNumber" type="text" name="name" />
          <small class="form-text text-muted">you can enter only an odd number<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="userFormGroup.controls.multiplesOfOddNumber.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.multiplesOfOddNumber.errors.odd.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Other Odd Number</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.otherOddNumber" type="text" name="name" />
          <small class="form-text text-muted">custom message based on messageKey<br/></small>
       <div v-if="userFormGroup.controls.otherOddNumber.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.otherOddNumber.errors.odd.message}}<br/></small>	
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
export default class OddCompleteComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
