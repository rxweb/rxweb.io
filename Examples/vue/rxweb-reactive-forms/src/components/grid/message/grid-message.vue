
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>GraphicImage GRid</label>
        <input id="name" class="form-control" v-model="digitalInfoFormGroup.props.graphicImageGrid" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="digitalInfoFormGroup.controls.graphicImageGrid.errors">
         <small class="form-text text-danger">{{digitalInfoFormGroup.controls.graphicImageGrid.errors.grid.message}}<br/></small>	
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
export default class GridMessageComponent extends Vue {
 digitalInfoFormGroup: IFormGroup<DigitalInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.digitalInfoFormGroup = this.formBuilder.formGroup(DigitalInfo) as IFormGroup<DigitalInfo>;
   }
}
</script> 
