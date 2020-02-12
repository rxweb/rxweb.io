
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>SoundRecording GRid</label>
        <input id="name" class="form-control" v-model="digitalInfoFormGroup.props.soundRecordingGrid" type="text" name="name" />
        <div v-if="digitalInfoFormGroup.controls.soundRecordingGrid.errors">
         <small class="form-text text-danger">{{digitalInfoFormGroup.controls.soundRecordingGrid.errors.grid.message}}<br/></small>	
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
export default class GridAddComponent extends Vue {
 digitalInfoFormGroup: IFormGroup<DigitalInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.digitalInfoFormGroup = this.formBuilder.formGroup(DigitalInfo) as IFormGroup<DigitalInfo>;
   }
}
</script> 
