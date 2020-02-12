
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Country Json</label>
        <input id="name" class="form-control" v-model="jsonInfoFormGroup.props.countryJson" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message based on Message Key<br/></small>
       <div v-if="jsonInfoFormGroup.controls.countryJson.errors">
         <small class="form-text text-danger">{{jsonInfoFormGroup.controls.countryJson.errors.json.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { JsonInfo } from './jsonInfo.model';

@Component
export default class JsonMessageKeyComponent extends Vue {
 jsonInfoFormGroup: IFormGroup<JsonInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.jsonInfoFormGroup = this.formBuilder.formGroup(JsonInfo) as IFormGroup<JsonInfo>;
   }
}
</script> 
