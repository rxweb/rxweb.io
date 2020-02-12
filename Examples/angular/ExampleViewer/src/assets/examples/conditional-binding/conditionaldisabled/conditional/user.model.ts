import { FormControlConfig } from '@rxweb/reactive-dynamic-forms';

export class UserModel extends FormControlConfig {

    private _disabled: boolean;

    get disabled() {
        if (this.controlsConfig.age.value >= 18) {
            return false
        }
        else {
            return true
        }
    }

    set disabled(value: boolean) {
        this._disabled = value;
    }
}