
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Name</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.name" type="text" name="name" />
          <small class="form-text text-muted">It should ends with 't'<br/></small>
       <div v-if="userFormGroup.controls.name.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.name.errors.endsWith.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Profession</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.profession" type="text" name="name" />
          <small class="form-text text-muted">You can enter value which ends with 'r'<br/></small>
         <small class="form-text text-muted">If you want to apply conditional validation on 'Profession' then you need to add 'name' input as 'Bharat'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.profession.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.profession.errors.endsWith.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Task Id</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.taskId" type="text" name="name" />
          <small class="form-text text-muted">You can enter value which ends with '1'<br/></small>
         <small class="form-text text-muted">If you want to apply conditional validation on 'Task Id' then you need to add 'name' input as 'Bharat'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.taskId.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.taskId.errors.endsWith.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Company</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.company" type="text" name="name" />
          <small class="form-text text-muted">Input should endsWith `b`<br/></small>
         <small class="form-text text-muted">Shows custom message<br/></small>
       <div v-if="userFormGroup.controls.company.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.company.errors.endsWith.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Skill</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.skill" type="text" name="name" />
          <small class="form-text text-muted">custom message based on messageKey<br/></small>
       <div v-if="userFormGroup.controls.skill.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.skill.errors.endsWith.message}}<br/></small>	
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
export default class EndsWithDynamicComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
