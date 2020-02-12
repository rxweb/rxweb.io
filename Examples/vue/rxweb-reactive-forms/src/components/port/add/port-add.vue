
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Educational Website Port</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.educationalWebsitePort" type="text" name="name" />
          <small class="form-text text-muted">You must enter a proper port number<br/></small>
       <div v-if="userFormGroup.controls.educationalWebsitePort.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.educationalWebsitePort.errors.port.message}}<br/></small>	
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
export default class PortAddComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
