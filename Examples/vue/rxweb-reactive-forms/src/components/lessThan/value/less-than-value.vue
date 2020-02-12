
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Maximum Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.maximumAge" type="text" name="name" />
        <div v-if="userFormGroup.controls.maximumAge.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.maximumAge.errors.lessThan.message}}<br/></small>	
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
export default class LessThanValueComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
