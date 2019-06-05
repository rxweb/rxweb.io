import { action, FormControlConfig } from "@rxweb/reactive-form-validators";

@action([
    {
        keyName: 'onlyPlaceholder',
        actions: {
            placeholder: function () {
                if (this.controlsConfig.firstName.value != '' && this.controlsConfig.firstName.value != undefined) {
                    return this.controlsConfig.lastName.placeholder = "Hello " + this.controlsConfig.firstName.value + ", Enter your last name"
                }
                return "Last Name"
            }
        }
    }
])
export class PlaceholderModel extends FormControlConfig { }