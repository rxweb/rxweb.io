
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Entry Place</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.entryPlace" type="text" name="name" />
        <div v-if="attandanceDetailFormGroup.controls.entryPlace.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.entryPlace.errors.minTime.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Opening Time</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.openingTime" type="text" name="name" />
        <div v-if="attandanceDetailFormGroup.controls.openingTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.openingTime.errors.minTime.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Required Hours</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.requiredHours" type="text" name="name" />
          <small class="form-text text-muted">Value should be greater than 8:30<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.requiredHours.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.requiredHours.errors.minTime.message}}<br/></small>	
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
        <label>Total Time Out</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.totalOutTime" type="text" name="name" />
          <small class="form-text text-muted">This field allow seconds in input time.<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.totalOutTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.totalOutTime.errors.minTime.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Exit Time</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.exitTime" type="text" name="name" />
          <small class="form-text text-muted">Shows Custom Validation Message.<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.exitTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.exitTime.errors.minTime.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Net-In Time</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.netInTime" type="text" name="name" />
          <small class="form-text text-muted">Shows Custom Validation Message using message key<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.netInTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.netInTime.errors.minTime.message}}<br/></small>	
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
export default class MinTimeDynamicComponent extends Vue {
 attandanceDetailFormGroup: IFormGroup<AttandanceDetail>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.attandanceDetailFormGroup = this.formBuilder.formGroup(AttandanceDetail) as IFormGroup<AttandanceDetail>;
   }
}
</script> 
