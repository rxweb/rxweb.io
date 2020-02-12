
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Entry Place</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.entryPlace" type="text" name="name" />
        <div v-if="attandanceDetailFormGroup.controls.entryPlace.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.entryPlace.errors.maxTime.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Entry Time</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.entryTime" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of maxTime on 'Entry Time' field, then enter the value of 'Main Entry Gate' in Entry Place textbox.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.entryTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.entryTime.errors.maxTime.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Total In Time</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.totalInTime" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of maxTime on 'Total In Time' field, then enter the value of 'Main Entry Gate' in Entry Place textbox.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.totalInTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.totalInTime.errors.maxTime.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { AttandanceDetail } from './attandanceDetail.model';

@Component
export default class MaxTimeConditionalExpressionComponent extends Vue {
 attandanceDetailFormGroup: IFormGroup<AttandanceDetail>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.attandanceDetailFormGroup = this.formBuilder.formGroup(AttandanceDetail) as IFormGroup<AttandanceDetail>;
   }
}
</script> 
