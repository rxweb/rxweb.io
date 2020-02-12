
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Organization Email Address</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.organizationEmailAddress" type="text" name="name" />
          <small class="form-text text-muted">custom message based on messageKey<br/></small>
       <div v-if="userFormGroup.controls.organizationEmailAddress.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.organizationEmailAddress.errors.contains.message}}<br/></small>	
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
export default class ContainsMessageKeyComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
