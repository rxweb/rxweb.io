import { FormControlConfig } from '@rxweb/reactive-dynamic-forms';

export class UserModel extends FormControlConfig {

    private _hide: boolean;

    get hide() {
        if (this.controlsConfig.addexistingaddress.value == 1) {
            return true
        }
        else {
            return false
        }
    }

    set hide(value: boolean) {
        this._hide = value;
    }
}