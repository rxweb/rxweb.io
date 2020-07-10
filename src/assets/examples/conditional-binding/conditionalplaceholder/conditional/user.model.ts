import { FormControlConfig } from '@rxweb/reactive-dynamic-forms';

export class UserModel extends FormControlConfig {

    private _placeholder: string;

    get placeholder() {
        if (this.controlsConfig.firstName.value) {
            return "Hi " +this.controlsConfig.firstName.value  + ", Please enter your bio"
        }
        else {
            return "Please enter your bio"
        }
    }

    set placeholder(value: string) {
        this._placeholder = value;
    }
}