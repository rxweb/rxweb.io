
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Obtained Marks</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.obtainedMarks" type="text" name="name" />
        <div v-if="userFormGroup.controls.obtainedMarks.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.obtainedMarks.errors.lessThan.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Other Activity Marks</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.otherActivityMarks" type="text" name="name" />
          <small class="form-text text-muted">Other Activity Marks less than to Obtained marks<br/></small>
       <div v-if="userFormGroup.controls.otherActivityMarks.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.otherActivityMarks.errors.lessThan.message}}<br/></small>	
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
export default class LessThanFieldNameComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
