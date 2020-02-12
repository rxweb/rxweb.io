
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Color Picker</label>
        <input id="name" class="form-control" v-model="hexcolorInfoFormGroup.props.color" type="text" name="name" />
        <div v-if="hexcolorInfoFormGroup.controls.color.errors">
         <small class="form-text text-danger">{{hexcolorInfoFormGroup.controls.color.errors.hexColor.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Footer Hexcode</label>
        <input id="name" class="form-control" v-model="hexcolorInfoFormGroup.props.footerHexCode" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation of hex color validation on 'Footer Hexcode' then you need to add 'Color Picker' input as '#AFAFAF'<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="hexcolorInfoFormGroup.controls.footerHexCode.errors">
         <small class="form-text text-danger">{{hexcolorInfoFormGroup.controls.footerHexCode.errors.hexColor.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Header Hexcode</label>
        <input id="name" class="form-control" v-model="hexcolorInfoFormGroup.props.headerHexcolorCode" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Header Hexcode' then you need to add 'Color Picker' input as '#AFAFAF'<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="hexcolorInfoFormGroup.controls.headerHexcolorCode.errors">
         <small class="form-text text-danger">{{hexcolorInfoFormGroup.controls.headerHexcolorCode.errors.hexColor.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Body Hexcode</label>
        <input id="name" class="form-control" v-model="hexcolorInfoFormGroup.props.bodyHexcolorCode" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message<br/></small>
       <div v-if="hexcolorInfoFormGroup.controls.bodyHexcolorCode.errors">
         <small class="form-text text-danger">{{hexcolorInfoFormGroup.controls.bodyHexcolorCode.errors.hexColor.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Title Hexcode</label>
        <input id="name" class="form-control" v-model="hexcolorInfoFormGroup.props.titleHexcolorCode" type="text" name="name" />
          <small class="form-text text-muted">Custom message based on message key<br/></small>
       <div v-if="hexcolorInfoFormGroup.controls.titleHexcolorCode.errors">
         <small class="form-text text-danger">{{hexcolorInfoFormGroup.controls.titleHexcolorCode.errors.hexColor.message}}<br/></small>	
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
export default class HexColorCompleteComponent extends Vue {
 hexcolorInfoFormGroup: IFormGroup<HexcolorInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.hexcolorInfoFormGroup = this.formBuilder.formGroup(HexcolorInfo) as IFormGroup<HexcolorInfo>;
   }
}
</script> 
