import { action, FormControlConfig } from "@rxweb/reactive-form-validators";

@action([
    {
        keyName: 'onlyPlaceholder',
        actions: {
            placeholder: function () {
                if (this.controlsConfig.loginThrough.value == 1) {
                    return this.controlsConfig.loginCriteria.placeholder = "Enter your Email Address"
                }
                else {
                    return this.controlsConfig.loginCriteria.placeholder = "Enter your Mobile Number"
                }
            }
        }
    }
])
export class PlaceholderModel extends FormControlConfig { }