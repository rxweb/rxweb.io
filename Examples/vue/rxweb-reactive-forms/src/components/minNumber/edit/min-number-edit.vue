
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Maths</label>
        <input id="name" class="form-control" v-model="resultInfoFormGroup.props.maths" type="text" name="name" />
          <small class="form-text text-muted">you can enter min number upto 35<br/></small>
       <div v-if="resultInfoFormGroup.controls.maths.errors">
         <small class="form-text text-danger">{{resultInfoFormGroup.controls.maths.errors.minNumber.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { ResultInfo } from './resultInfo.model';

@Component
export default class MinNumberEditComponent extends Vue {
 resultInfoFormGroup: IFormGroup<ResultInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.resultInfoFormGroup = this.formBuilder.formGroup(ResultInfo) as IFormGroup<ResultInfo>;
   }
}
</script> 
