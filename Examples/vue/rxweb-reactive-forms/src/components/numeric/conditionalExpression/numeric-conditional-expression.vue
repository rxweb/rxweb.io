
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Data Type</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.dataType" type="text" name="name" />
        <div v-if="userInfoFormGroup.controls.dataType.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.dataType.errors.numeric.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Real Number</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.realNumber" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Real Number' then you need to add 'Data Type' input as 'Real'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userInfoFormGroup.controls.realNumber.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.realNumber.errors.numeric.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Integer Number</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.integerNumber" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Integer Number' then you need to add 'Data Type' input as 'Integer'.<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userInfoFormGroup.controls.integerNumber.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.integerNumber.errors.numeric.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { UserInfo } from './userInfo.model';

@Component
export default class NumericConditionalExpressionComponent extends Vue {
 userInfoFormGroup: IFormGroup<UserInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userInfoFormGroup = this.formBuilder.formGroup(UserInfo) as IFormGroup<UserInfo>;
   }
}
</script> 
