
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>VideoGraphic GRid</label>
        <input id="name" class="form-control" v-model="digitalInfoFormGroup.props.videoGraphicGrid" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message based on message key.<br/></small>
       <div v-if="digitalInfoFormGroup.controls.videoGraphicGrid.errors">
         <small class="form-text text-danger">{{digitalInfoFormGroup.controls.videoGraphicGrid.errors.grid.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { DigitalInfo } from './digitalInfo.model';

@Component
export default class GridMessageKeyComponent extends Vue {
 digitalInfoFormGroup: IFormGroup<DigitalInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.digitalInfoFormGroup = this.formBuilder.formGroup(DigitalInfo) as IFormGroup<DigitalInfo>;
   }
}
</script> 
