
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Active</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.active" type="text" name="name" />
        <div v-if="userFormGroup.controls.active.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.active.errors.toBoolean.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Strict Active</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.strictActive" type="text" name="name" />
        <div v-if="userFormGroup.controls.strictActive.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.strictActive.errors.toBoolean.message}}<br/></small>	
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
export default class ToBooleanCompleteComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
