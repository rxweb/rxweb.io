import { FormControlConfig } from '@rxweb/reactive-dynamic-forms';

export class UserModel extends FormControlConfig {

    private _label: string;

    get label() {
        if (this.controlsConfig.firstName.value) {
            return "Hi " +this.controlsConfig.firstName.value  + ", Please enter your bio"
        }
        else {
            return "Please enter your bio"
        }
    }

    set label(value: string) {
        this._label = value;
    }
}