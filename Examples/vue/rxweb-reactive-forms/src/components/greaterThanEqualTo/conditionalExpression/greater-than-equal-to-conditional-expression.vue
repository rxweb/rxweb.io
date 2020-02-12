
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Admission Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.admissionAge" type="text" name="name" />
        <div v-if="userFormGroup.controls.admissionAge.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.admissionAge.errors.greaterThanEqualTo.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Member Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.memberAge" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Member Age' then you need to add 'Admission Age' field greater than or equal to '18'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.memberAge.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.memberAge.errors.greaterThanEqualTo.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Voter Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.voterAge" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Voter Age' then you need to add 'Admission Age' field greater than or equal to '18'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.voterAge.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.voterAge.errors.greaterThanEqualTo.message}}<br/></small>	
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
export default class GreaterThanEqualToConditionalExpressionComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
