
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Maths</label>
        <input id="name" class="form-control" v-model="resultInfoFormGroup.props.maths" type="text" name="name" />
        <div v-if="resultInfoFormGroup.controls.maths.errors">
         <small class="form-text text-danger">{{resultInfoFormGroup.controls.maths.errors.minNumber.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Science</label>
        <input id="name" class="form-control" v-model="resultInfoFormGroup.props.science" type="text" name="name" />
          <small class="form-text text-muted">Shows Custom Validation Message<br/></small>
         <small class="form-text text-muted">you can enter min number upto 35<br/></small>
       <div v-if="resultInfoFormGroup.controls.science.errors">
         <small class="form-text text-danger">{{resultInfoFormGroup.controls.science.errors.minNumber.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>English</label>
        <input id="name" class="form-control" v-model="resultInfoFormGroup.props.english" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'English' then you need to add 'Maths' input as '50'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="resultInfoFormGroup.controls.english.errors">
         <small class="form-text text-danger">{{resultInfoFormGroup.controls.english.errors.minNumber.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Statstics</label>
        <input id="name" class="form-control" v-model="resultInfoFormGroup.props.statstics" type="text" name="name" />
          <small class="form-text text-muted">Conditional validation will be applied if the 'Statstics' field have value of '50'<br/></small>
         <small class="form-text text-muted">you can enter min number upto 35<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="resultInfoFormGroup.controls.statstics.errors">
         <small class="form-text text-danger">{{resultInfoFormGroup.controls.statstics.errors.minNumber.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Economics</label>
        <input id="name" class="form-control" v-model="resultInfoFormGroup.props.economics" type="text" name="name" />
          <small class="form-text text-muted">Shows Custom Validation Message using message key<br/></small>
       <div v-if="resultInfoFormGroup.controls.economics.errors">
         <small class="form-text text-danger">{{resultInfoFormGroup.controls.economics.errors.minNumber.message}}<br/></small>	
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
export default class MinNumberDynamicComponent extends Vue {
 resultInfoFormGroup: IFormGroup<ResultInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.resultInfoFormGroup = this.formBuilder.formGroup(ResultInfo) as IFormGroup<ResultInfo>;
   }
}
</script> 
