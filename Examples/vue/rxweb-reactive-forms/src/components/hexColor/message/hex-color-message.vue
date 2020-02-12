
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Body Hexcode</label>
        <input id="name" class="form-control" v-model="hexcolorInfoFormGroup.props.bodyHexcolorCode" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message<br/></small>
       <div v-if="hexcolorInfoFormGroup.controls.bodyHexcolorCode.errors">
         <small class="form-text text-danger">{{hexcolorInfoFormGroup.controls.bodyHexcolorCode.errors.hexColor.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { HexcolorInfo } from './hexcolorInfo.model';

@Component
export default class HexColorMessageComponent extends Vue {
 hexcolorInfoFormGroup: IFormGroup<HexcolorInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.hexcolorInfoFormGroup = this.formBuilder.formGroup(HexcolorInfo) as IFormGroup<HexcolorInfo>;
   }
}
</script> 
