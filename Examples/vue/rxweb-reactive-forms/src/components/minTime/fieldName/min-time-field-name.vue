
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Net-In Time</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.netInTime" type="text" name="name" />
          <small class="form-text text-muted">Shows Custom Validation Message using message key<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.netInTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.netInTime.errors.minTime.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Entry Time</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.entryTime" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of minTime on 'Entry Time' field, then enter the value of 'Main Entry Gate' in Entry Place textbox.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.entryTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.entryTime.errors.minTime.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Total In Time</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.totalInTime" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of minTime on 'Total In Time' field, then enter the value of 'Main Entry Gate' in Entry Place textbox.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.totalInTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.totalInTime.errors.minTime.message}}<br/></small>	
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
export default class MinTimeFieldNameComponent extends Vue {
 attandanceDetailFormGroup: IFormGroup<AttandanceDetail>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.attandanceDetailFormGroup = this.formBuilder.formGroup(AttandanceDetail) as IFormGroup<AttandanceDetail>;
   }
}
</script> 
