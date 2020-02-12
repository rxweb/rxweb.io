
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Total Time Out</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.totalOutTime" type="text" name="name" />
          <small class="form-text text-muted">This field allow seconds in input time.<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.totalOutTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.totalOutTime.errors.maxTime.message}}<br/></small>	
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
export default class MaxTimeAllowSecondsComponent extends Vue {
 attandanceDetailFormGroup: IFormGroup<AttandanceDetail>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.attandanceDetailFormGroup = this.formBuilder.formGroup(AttandanceDetail) as IFormGroup<AttandanceDetail>;
   }
}
</script> 
