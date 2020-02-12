
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Full Name</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.fullName" type="text" name="name" />
          <small class="form-text text-muted">Shows Custom Validation Message based on message key<br/></small>
       <div v-if="userFormGroup.controls.fullName.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.fullName.errors.required.message}}<br/></small>	
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
export default class RequiredMessageKeyComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
