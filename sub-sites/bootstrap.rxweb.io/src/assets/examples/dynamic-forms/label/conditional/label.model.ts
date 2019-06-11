import { action, FormControlConfig } from "@rxweb/reactive-form-validators";

@action([
    {
        keyName: 'onlyLabel',
        actions: {
            label: function () {
                if (this.controlsConfig.loginThrough.value == 1) {
                    return this.controlsConfig.loginCriteria.label = "Email Address"
                }
                else {
                    return this.controlsConfig.loginCriteria.label = "Mobile Number"
                }
            }
        }
    }
])
export class LabelModel extends FormControlConfig { }