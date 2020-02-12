
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Entry Place</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.entryPlace" type="text" name="name" />
        <div v-if="attandanceDetailFormGroup.controls.entryPlace.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.entryPlace.errors.time.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Total In</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.totalIn" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of time on 'Entry Time' field, then enter the value of 'Lunch Room' in Entry Place textbox.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.totalIn.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.totalIn.errors.time.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Entry Time</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.entryTime" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of time on 'Entry Time' field, then enter the value of 'Lunch Room' in Entry Place textbox.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.entryTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.entryTime.errors.time.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Total Time Out</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.totalOutTime" type="text" name="name" />
          <small class="form-text text-muted">Allow seconds.<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.totalOutTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.totalOutTime.errors.time.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Exit Time</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.exitTime" type="text" name="name" />
          <small class="form-text text-muted">Shows Custom Validation Message.<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.exitTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.exitTime.errors.time.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Net-In Time</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.netInTime" type="text" name="name" />
          <small class="form-text text-muted">Shows Custom Validation Message using message key<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.netInTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.netInTime.errors.time.message}}<br/></small>	
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
export default class TimeDynamicComponent extends Vue {
 attandanceDetailFormGroup: IFormGroup<AttandanceDetail>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.attandanceDetailFormGroup = this.formBuilder.formGroup(AttandanceDetail) as IFormGroup<AttandanceDetail>;
   }
}
</script> 
