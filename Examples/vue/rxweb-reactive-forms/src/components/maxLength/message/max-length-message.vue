
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>User Name</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.userName" type="text" name="name" />
        <div v-if="userFormGroup.controls.userName.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.userName.errors.maxLength.message}}<br/></small>	
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
export default class MaxLengthMessageComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
