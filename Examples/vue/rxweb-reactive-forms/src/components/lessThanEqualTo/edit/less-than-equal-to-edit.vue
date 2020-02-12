
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
        <label>Marks</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.marks" type="text" name="name" />
          <small class="form-text text-muted">This is checking less than equal to validation for  Marks must be less than equal to Total Marks.<br/></small>
       <div v-if="userFormGroup.controls.marks.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.marks.errors.lessThanEqualTo.message}}<br/></small>	
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
export default class LessThanEqualToEditComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
