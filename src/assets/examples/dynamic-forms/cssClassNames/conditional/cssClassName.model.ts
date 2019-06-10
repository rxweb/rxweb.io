import { FormControlConfig, action } from "@rxweb/reactive-form-validators";

@action([
    {
        keyName: 'onlyCssClassNames',
        actions: {
            cssClassNames: function () {
                if (this.controlsConfig.firstName.value == 'John') {
                    return this.controlsConfig.lastName.cssClassNames = ['col-6','font-italic']
                }
                return null
            }
        }
    }
])
export class CssClassNamesModel extends FormControlConfig { }
