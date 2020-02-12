
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.age" type="text" name="name" />
        <div v-if="userFormGroup.controls.age.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.age.errors.greaterThan.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Voter Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.voterAge" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Voter Age' then need to add 'Age' field greater than '17'.<br/></small>
       <div v-if="userFormGroup.controls.voterAge.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.voterAge.errors.greaterThan.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Member Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.memberAge" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Member Age' then need to add 'Age' field greater than '17'.<br/></small>
       <div v-if="userFormGroup.controls.memberAge.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.memberAge.errors.greaterThan.message}}<br/></small>	
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
export default class GreaterThanConditionalExpressionComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
