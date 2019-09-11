import { FormControlConfig, Hooks } from '@rxweb/reactive-dynamic-forms'

export class UserModel extends FormControlConfig {


  hooks: Hooks = {
    postValue: () => {
      if (this.controlsConfig.quantity.value && this.controlsConfig.price.value) {
        this.controlsConfig.totalAmount.value = this.controlsConfig.quantity.value * this.controlsConfig.price.value;
      }
      else {
        return null;
      }
    }
  }


}