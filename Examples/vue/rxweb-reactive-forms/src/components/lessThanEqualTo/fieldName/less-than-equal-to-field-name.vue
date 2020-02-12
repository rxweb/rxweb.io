
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Total Marks</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.totalMarks" type="text" name="name" />
        <div v-if="userFormGroup.controls.totalMarks.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.totalMarks.errors.lessThanEqualTo.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Passing Marks</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.passingMarks" type="text" name="name" />
          <small class="form-text text-muted">Passing Marks less than to Total marks<br/></small>
       <div v-if="userFormGroup.controls.passingMarks.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.passingMarks.errors.lessThanEqualTo.message}}<br/></small>	
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
export default class LessThanEqualToFieldNameComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
