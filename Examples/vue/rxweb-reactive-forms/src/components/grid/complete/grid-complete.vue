
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
    <div class="form-group">
        <label>AudioVisualRecording GRid</label>
        <input id="name" class="form-control" v-model="digitalInfoFormGroup.props.audioVisualRecordingGrid" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'AudioVisualRecording GRid' then you need to add 'SoundRecording GRid' field input to 'A12425GABC1234002M'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="digitalInfoFormGroup.controls.audioVisualRecordingGrid.errors">
         <small class="form-text text-danger">{{digitalInfoFormGroup.controls.audioVisualRecordingGrid.errors.grid.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Photograph GRid</label>
        <input id="name" class="form-control" v-model="digitalInfoFormGroup.props.photographGrid" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Photograph GRid' then you need to add 'SoundRecording GRid' field input to 'A12425GABC1234002M'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="digitalInfoFormGroup.controls.photographGrid.errors">
         <small class="form-text text-danger">{{digitalInfoFormGroup.controls.photographGrid.errors.grid.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>GraphicImage GRid</label>
        <input id="name" class="form-control" v-model="digitalInfoFormGroup.props.graphicImageGrid" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="digitalInfoFormGroup.controls.graphicImageGrid.errors">
         <small class="form-text text-danger">{{digitalInfoFormGroup.controls.graphicImageGrid.errors.grid.message}}<br/></small>	
       </div>
      </div>  
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
export default class GridCompleteComponent extends Vue {
 digitalInfoFormGroup: IFormGroup<DigitalInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.digitalInfoFormGroup = this.formBuilder.formGroup(DigitalInfo) as IFormGroup<DigitalInfo>;
   }
}
</script> 
