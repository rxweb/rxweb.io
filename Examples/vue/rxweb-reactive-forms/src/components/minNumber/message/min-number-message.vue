
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Science</label>
        <input id="name" class="form-control" v-model="resultInfoFormGroup.props.science" type="text" name="name" />
          <small class="form-text text-muted">Shows Custom Validation Message<br/></small>
         <small class="form-text text-muted">you can enter min number upto 35<br/></small>
       <div v-if="resultInfoFormGroup.controls.science.errors">
         <small class="form-text text-danger">{{resultInfoFormGroup.controls.science.errors.minNumber.message}}<br/></small>	
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
export default class MinNumberMessageComponent extends Vue {
 resultInfoFormGroup: IFormGroup<ResultInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.resultInfoFormGroup = this.formBuilder.formGroup(ResultInfo) as IFormGroup<ResultInfo>;
   }
}
</script> 
