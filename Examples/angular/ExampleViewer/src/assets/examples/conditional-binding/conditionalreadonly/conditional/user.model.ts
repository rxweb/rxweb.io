import { FormControlConfig } from '@rxweb/reactive-dynamic-forms';

export class UserModel extends FormControlConfig {

    private _readonly: boolean;

    get readonly() {
        if (this.controlsConfig.mode.value != 1) {
            return true
        }
        else {
            return false
        }
    }

    set readonly(value: boolean) {
        this._readonly = value;
    }
}