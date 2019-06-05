import { FormControlConfig, action } from "@rxweb/reactive-form-validators";

@action([
    {
        keyName: 'onlyDescription',
        actions: {
            description: function () {
                if (this.controlsConfig.firstName.value != '' && this.controlsConfig.firstName.value != undefined) {
                    return this.controlsConfig.lastName.description = "Hello " + this.controlsConfig.firstName.value + ", Enter the name of company in which you are currently working"
                }
                return "Last Name"
            }
        }
    }
])
export class DescriptionModel extends FormControlConfig { }