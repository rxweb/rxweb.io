
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
    <div class="form-group">
        <label>Maximum Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.maximumAge" type="text" name="name" />
        <div v-if="userFormGroup.controls.maximumAge.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.maximumAge.errors.lessThanEqualTo.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Obtained Marks</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.obtainedMarks" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation of less than equal to validation on 'Obtained Marks' then then Total Marks must be 100.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.obtainedMarks.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.obtainedMarks.errors.lessThanEqualTo.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Practical Exam Marks</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.practicalExamMarks" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation of less than equal to validation on 'Practical Exam Marks' then then Total Marks must be 100.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.practicalExamMarks.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.practicalExamMarks.errors.lessThanEqualTo.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Other Marks</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.otherMarks" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message<br/></small>
       <div v-if="userFormGroup.controls.otherMarks.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.otherMarks.errors.lessThanEqualTo.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Discipline Marks</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.disciplineMarks" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message based on message key<br/></small>
       <div v-if="userFormGroup.controls.disciplineMarks.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.disciplineMarks.errors.lessThanEqualTo.message}}<br/></small>	
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
export default class LessThanEqualToCompleteComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
