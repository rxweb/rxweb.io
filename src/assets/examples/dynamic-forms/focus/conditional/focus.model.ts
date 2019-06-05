import { FormControlConfig, action } from '@rxweb/reactive-form-validators'

@action([
    {
        keyName: 'onlyFocus',
        actions: {
            focus: function () { return this.controlsConfig.firstName.value == 'John' }
        }
    }
])
export class FocusModel extends FormControlConfig { }