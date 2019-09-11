import { FormControlConfig, Hooks } from '@rxweb/reactive-dynamic-forms'

export class QuantityModel extends FormControlConfig {

  hooks: Hooks = {      
        preValue: (v) => {
            return !isNaN(v);
        }
  }
}