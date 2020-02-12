
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Resignation Date</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.resignationDate" type="text" name="name" />
          <small class="form-text text-muted">Enterred date must be less than the 30th July 2018<br/></small>
         <small class="form-text text-muted">Shows custom message based on message key<br/></small>
       <div v-if="userFormGroup.controls.resignationDate.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.resignationDate.errors.maxDate.message}}<br/></small>	
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
export default class MaxDateMessageKeyComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
