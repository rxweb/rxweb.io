import { action, FormControlConfig } from "@rxweb/reactive-form-validators";

@action('label', [
    {
        keyName: 'onlyLabel',
        actions: {
            label: function () {
                if (this.controlsConfig.firstName.value != null && this.controlsConfig.firstName.value != '' ) {
                    console.log(this.controlsConfig.firstName.value)
                    return this.controlsConfig.lastName.label = this.controlsConfig.firstName.value + ", Enter your last name";
                }
                return "Last Name"
            }
        }
    }
])
export class LabelModel extends FormControlConfig { }