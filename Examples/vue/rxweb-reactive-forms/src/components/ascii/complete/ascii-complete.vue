
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Language</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.language" type="text" name="name" />
        <div v-if="userFormGroup.controls.language.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.language.errors.ascii.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Number Ascii Code</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.numberAsciiCode" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Number Ascii Code' then you need to add 'Language' input as 'Java'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.numberAsciiCode.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.numberAsciiCode.errors.ascii.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Alphabet Ascii Code</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.alphabetAsciiCode" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Alphabet Ascii Code' then you need to add 'Language' input as 'Java'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.alphabetAsciiCode.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.alphabetAsciiCode.errors.ascii.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Special Character Ascii Code</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.specialCharAsciiCode" type="text" name="name" />
          <small class="form-text text-muted">enter Ascii Code only<br/></small>
         <small class="form-text text-muted">Shows custom message.<br/></small>
       <div v-if="userFormGroup.controls.specialCharAsciiCode.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.specialCharAsciiCode.errors.ascii.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Digital Code</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.digitalCode" type="text" name="name" />
          <small class="form-text text-muted">custom message based on messageKey<br/></small>
       <div v-if="userFormGroup.controls.digitalCode.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.digitalCode.errors.ascii.message}}<br/></small>	
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
export default class AsciiCompleteComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
