import { FormControlConfig,Hooks } from '@rxweb/reactive-dynamic-forms';

export class UserModel extends FormControlConfig {

    private _value: string;

    hooks:Hooks = {
      postValue:()=>{
        if(this.value){
          this.controlsConfig.bio.value = "Hi";
        }else
        this.controlsConfig.bio.value = ""
      }
    }

    get value() {
       return this._value;
    }

    set value(value: string) {
        this._value = value;
    }
}