
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Scheme</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.scheme" type="text" name="name" />
        <div v-if="userFormGroup.controls.scheme.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.scheme.errors.dataUri.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Audio Data Uri</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.audioDataUri" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Audio Data Uri' then you need to add 'Scheme' input as 'DataUri'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.audioDataUri.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.audioDataUri.errors.dataUri.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Image Data Uri</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.imageDataUri" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Image Data Uri' then you need to add 'Scheme' input as 'DataUri'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.imageDataUri.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.imageDataUri.errors.dataUri.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { User } from './user.model';

@Component
export default class DataUriConditionalExpressionComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
