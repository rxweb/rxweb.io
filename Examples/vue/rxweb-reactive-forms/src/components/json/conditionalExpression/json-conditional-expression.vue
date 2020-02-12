
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Location</label>
        <input id="name" class="form-control" v-model="jsonInfoFormGroup.props.location" type="text" name="name" />
        <div v-if="jsonInfoFormGroup.controls.location.errors">
         <small class="form-text text-danger">{{jsonInfoFormGroup.controls.location.errors.json.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Location Json</label>
        <input id="name" class="form-control" v-model="jsonInfoFormGroup.props.locationJson" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Location Json' then you need to add 'Location' input as &#123;CountryName:India&#125;.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="jsonInfoFormGroup.controls.locationJson.errors">
         <small class="form-text text-danger">{{jsonInfoFormGroup.controls.locationJson.errors.json.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Address Json</label>
        <input id="name" class="form-control" v-model="jsonInfoFormGroup.props.addressJson" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Address Json' then you need to add 'Location' input as &#123;CountryName:India&#125;.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="jsonInfoFormGroup.controls.addressJson.errors">
         <small class="form-text text-danger">{{jsonInfoFormGroup.controls.addressJson.errors.json.message}}<br/></small>	
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
export default class JsonConditionalExpressionComponent extends Vue {
 jsonInfoFormGroup: IFormGroup<JsonInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.jsonInfoFormGroup = this.formBuilder.formGroup(JsonInfo) as IFormGroup<JsonInfo>;
   }
}
</script> 
