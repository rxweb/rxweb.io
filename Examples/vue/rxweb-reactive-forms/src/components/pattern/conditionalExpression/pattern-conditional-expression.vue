
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>User Name</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.userName" type="text" name="name" />
          <small class="form-text text-muted">It checked that username match alpha regex or not<br/></small>
       <div v-if="userFormGroup.controls.userName.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.userName.errors.pattern.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.age" type="text" name="name" />
          <small class="form-text text-muted">It checked that age match with digit regex or not and it conditionaly applied when userName is Bharat<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.age.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.age.errors.pattern.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Contact Number</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.contactNumber" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Contact Number' then you need to add 'UserName' input as 'Bharat'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.contactNumber.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.contactNumber.errors.pattern.message}}<br/></small>	
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
export default class PatternConditionalExpressionComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
