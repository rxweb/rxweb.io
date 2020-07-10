import { FormControlConfig } from '@rxweb/reactive-dynamic-forms';

export class UserModel extends FormControlConfig {

    private _description: string;

    get description() {
        if (this.controlsConfig.firstName.value) {
            return "Hi " +this.controlsConfig.firstName.value  + ", Please enter your bio"
        }
        else {
            return "Please enter your bio"
        }
    }

    set description(value: string) {
        this._description = value;
    }
}