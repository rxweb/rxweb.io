
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Obtained Marks for above subject code</label>
        <input id="name" class="form-control" v-model="subjectDetailsFormGroup.props.obtainedMarks" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of Max Number on 'Obtained Marks' field, then enter the value '8CS5A' in 'Subject Code' textbox and you can enter maxNumber upto 100<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="subjectDetailsFormGroup.controls.obtainedMarks.errors">
         <small class="form-text text-danger">{{subjectDetailsFormGroup.controls.obtainedMarks.errors.maxNumber.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Maximum Marks for above subject code</label>
        <input id="name" class="form-control" v-model="subjectDetailsFormGroup.props.maximumMarks" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of Max Number on 'Maximum Marks' field, then enter the value '8CS5A' in 'Subject Code' textbox and you can enter maxNumber upto 100<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="subjectDetailsFormGroup.controls.maximumMarks.errors">
         <small class="form-text text-danger">{{subjectDetailsFormGroup.controls.maximumMarks.errors.maxNumber.message}}<br/></small>	
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
export default class MaxNumberValueComponent extends Vue {
 subjectDetailsFormGroup: IFormGroup<SubjectDetails>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.subjectDetailsFormGroup = this.formBuilder.formGroup(SubjectDetails) as IFormGroup<SubjectDetails>;
   }
}
</script> 
