
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>User Name</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.userName" type="text" name="name" />
        <div v-if="userFormGroup.controls.userName.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.userName.errors.maxDate.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Admission Date</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.admissionDate" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of Max Date on 'Admission Date' field, then enter the value 'Bharat' in 'User Name' textbox and you can enter maxDate as 30th july 2018<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.admissionDate.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.admissionDate.errors.maxDate.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Birth Date</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.birthDate" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of Max Date on 'Birth date' field, then enter the value 'Bharat' in 'User Name' textbox and you can enter maxDate as 30th july 2018<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.birthDate.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.birthDate.errors.maxDate.message}}<br/></small>	
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
export default class MaxDateConditionalExpressionComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
