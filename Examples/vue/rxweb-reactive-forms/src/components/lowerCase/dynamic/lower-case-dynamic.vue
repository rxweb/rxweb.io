
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Username</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.username" type="text" name="name" />
        <div v-if="userFormGroup.controls.username.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.username.errors.lowerCase.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>First name</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.firstName" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of lowerCase on 'First Name' field, then enter the value of 'jonathan.feldman' in username textbox.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.firstName.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.firstName.errors.lowerCase.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Middle name</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.middleName" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of lowerCase on 'Middle Name' field, then enter the value of 'jonathan.feldman' in username textbox.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.middleName.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.middleName.errors.lowerCase.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Last name</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.lastName" type="text" name="name" />
        <div v-if="userFormGroup.controls.lastName.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.lastName.errors.lowerCase.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>State</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.state" type="text" name="name" />
        <div v-if="userFormGroup.controls.state.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.state.errors.lowerCase.message}}<br/></small>	
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
export default class LowerCaseDynamicComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
