
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
        <label>Retirement Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.retiermentAge" type="text" name="name" />
          <small class="form-text text-muted">Retirement Age should be greater than age<br/></small>
       <div v-if="userFormGroup.controls.retiermentAge.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.retiermentAge.errors.greaterThan.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Minimum Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.minimumAge" type="text" name="name" />
        <div v-if="userFormGroup.controls.minimumAge.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.minimumAge.errors.greaterThan.message}}<br/></small>	
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
    <div class="form-group">
        <label>Voter Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.voterAge" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Voter Age' then need to add 'Age' field greater than '17'.<br/></small>
       <div v-if="userFormGroup.controls.voterAge.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.voterAge.errors.greaterThan.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Other Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.otherAge" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message<br/></small>
       <div v-if="userFormGroup.controls.otherAge.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.otherAge.errors.greaterThan.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Joining Age</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.joiningAge" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message based on message key<br/></small>
       <div v-if="userFormGroup.controls.joiningAge.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.joiningAge.errors.greaterThan.message}}<br/></small>	
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
export default class GreaterThanCompleteComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
