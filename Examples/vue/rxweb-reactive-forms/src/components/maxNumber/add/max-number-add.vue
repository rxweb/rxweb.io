
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Passing Marks</label>
        <input id="name" class="form-control" v-model="subjectDetailsFormGroup.props.passingMarks" type="text" name="name" />
          <small class="form-text text-muted">you can enter MaxNumber upto 50<br/></small>
       <div v-if="subjectDetailsFormGroup.controls.passingMarks.errors">
         <small class="form-text text-danger">{{subjectDetailsFormGroup.controls.passingMarks.errors.maxNumber.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { SubjectDetails } from './subjectDetails.model';

@Component
export default class MaxNumberAddComponent extends Vue {
 subjectDetailsFormGroup: IFormGroup<SubjectDetails>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.subjectDetailsFormGroup = this.formBuilder.formGroup(SubjectDetails) as IFormGroup<SubjectDetails>;
   }
}
</script> 
