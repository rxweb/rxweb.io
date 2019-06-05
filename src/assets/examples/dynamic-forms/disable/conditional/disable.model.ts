import { action, FormControlConfig } from '@rxweb/reactive-form-validators'

@action([
    {
        keyName: 'onlyDisable',
        actions: {
            disable: function () { return this.controlsConfig.firstName.value == 'John' }
        }
    }
])
export class DisableModel extends FormControlConfig { }