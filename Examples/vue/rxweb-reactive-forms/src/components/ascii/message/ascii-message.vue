
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Special Character Ascii Code</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.specialCharAsciiCode" type="text" name="name" />
          <small class="form-text text-muted">enter Ascii Code only<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="userFormGroup.controls.specialCharAsciiCode.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.specialCharAsciiCode.errors.ascii.message}}<br/></small>	
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
export default class AsciiMessageComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
