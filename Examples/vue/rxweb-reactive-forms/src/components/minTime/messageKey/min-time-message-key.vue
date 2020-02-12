
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
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { AttandanceDetail } from './attandanceDetail.model';

@Component
export default class MinTimeMessageKeyComponent extends Vue {
 attandanceDetailFormGroup: IFormGroup<AttandanceDetail>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.attandanceDetailFormGroup = this.formBuilder.formGroup(AttandanceDetail) as IFormGroup<AttandanceDetail>;
   }
}
</script> 
