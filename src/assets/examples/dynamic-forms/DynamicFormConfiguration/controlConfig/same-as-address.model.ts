import { FormControlConfig } from "@rxweb/reactive-dynamic-forms"

export class SameAsAddressModel extends FormControlConfig{

    hooks = {
        postValue:()=>{
            if(this.value)
              this.controlsConfig.correspondenceAddress.value = this.controlsConfig.permanentAddress.value;
            else
              this.controlsConfig.correspondenceAddress.value = null;
        }
      }
}