import { FormControlConfig } from '@rxweb/reactive-dynamic-forms';

export class UserModel extends FormControlConfig {

    private _class: string[];

    get class() {
        if (this.controlsConfig.firstName.value) {
            return ["form-control-lg"]
        }
        else {
            return ["form-control-sm"]
        }
    }

    set class(value: string[]) {
        this._class = value;
    }
}