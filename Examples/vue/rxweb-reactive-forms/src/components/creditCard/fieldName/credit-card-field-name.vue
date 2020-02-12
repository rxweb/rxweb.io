
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Card Type</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.cardType" type="text" name="name" />
          <small class="form-text text-muted">Based on selection of card type conditional validation is applied<br/></small>
       <div v-if="userFormGroup.controls.cardType.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.cardType.errors.creditCard.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Other Visa Card</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.otherVisaCard" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Visa Card' then you need to add 'card type' input as 'Visa'.<br/></small>
         <small class="form-text text-muted">It shows custom message<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.otherVisaCard.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.otherVisaCard.errors.creditCard.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>American Express</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.americanExpressCard" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'American Express' then you need to add 'card type' input as 'AmericanExpress'.<br/></small>
         <small class="form-text text-muted">Message comes from Reactive Form Config<br/></small>
       <div v-if="userFormGroup.controls.americanExpressCard.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.americanExpressCard.errors.creditCard.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Maestro Card</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.maestroCard" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'MaestroCard Card' then you need to add 'card type' input as 'Maestro'.<br/></small>
       <div v-if="userFormGroup.controls.maestroCard.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.maestroCard.errors.creditCard.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>JCB Card</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.jcbCard" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'JCB Card' then you need to add 'card type' input as 'JCB'.<br/></small>
       <div v-if="userFormGroup.controls.jcbCard.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.jcbCard.errors.creditCard.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Discover Card</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.discoverCard" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Discover Card' then you need to add 'card type' input as 'Discover'.<br/></small>
       <div v-if="userFormGroup.controls.discoverCard.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.discoverCard.errors.creditCard.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Master Card</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.masterCard" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Master Card' then you need to add 'card type' input as 'MasterCard'.<br/></small>
       <div v-if="userFormGroup.controls.masterCard.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.masterCard.errors.creditCard.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Diners Club Card</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.dinersClubCard" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Diners Club Card' then you need to add 'card type' input as 'DinersClub'.<br/></small>
       <div v-if="userFormGroup.controls.dinersClubCard.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.dinersClubCard.errors.creditCard.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Visa Card</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.visaCard" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Visa Card' then you need to add 'card type' input as 'Visa'.<br/></small>
         <small class="form-text text-muted">It shows custom message<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.visaCard.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.visaCard.errors.creditCard.message}}<br/></small>	
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
export default class CreditCardFieldNameComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
