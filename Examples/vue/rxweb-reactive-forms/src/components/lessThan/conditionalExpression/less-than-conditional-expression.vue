
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
        <label>Passing Marks</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.passingMarks" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Passing Marks' then you need to add 'Obtained Marks' field less than '35'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.passingMarks.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.passingMarks.errors.lessThan.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Practical Exam Marks</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.practicalExamMarks" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation of less than validation on 'Practical Exam Marks' then Obtained Marks must be less than '35'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.practicalExamMarks.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.practicalExamMarks.errors.lessThan.message}}<br/></small>	
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
export default class LessThanConditionalExpressionComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
