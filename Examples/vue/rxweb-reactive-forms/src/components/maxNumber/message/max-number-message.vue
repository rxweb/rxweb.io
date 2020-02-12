
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Practical Marks</label>
        <input id="name" class="form-control" v-model="subjectDetailsFormGroup.props.practicalMarks" type="text" name="name" />
          <small class="form-text text-muted">you can enter MaxNumber upto 70<br/></small>
         <small class="form-text text-muted">Shows custom message<br/></small>
       <div v-if="subjectDetailsFormGroup.controls.practicalMarks.errors">
         <small class="form-text text-danger">{{subjectDetailsFormGroup.controls.practicalMarks.errors.maxNumber.message}}<br/></small>	
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
export default class MaxNumberMessageComponent extends Vue {
 subjectDetailsFormGroup: IFormGroup<SubjectDetails>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.subjectDetailsFormGroup = this.formBuilder.formGroup(SubjectDetails) as IFormGroup<SubjectDetails>;
   }
}
</script> 
